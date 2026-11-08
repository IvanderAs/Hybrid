import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useIsFocused, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function CaptureScreen() {
  const router = useRouter();
  const isFocused = useIsFocused(); // Track tab focus state
  const cameraRef = useRef<any>(null);
  
  const [permission, requestPermission] = useCameraPermissions();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);

  // Manual fallback form state
  const [merchant, setMerchant] = useState('');
  const [amount, setAmount] = useState('');

  if (!permission) {
    return <View style={styles.center}><ActivityIndicator size="large" color="#10B981" /></View>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Ionicons name="camera-outline" size={64} color="#64748B" style={{ marginBottom: 16 }} />
        <Text style={styles.permissionTitle}>Camera Access Required</Text>
        <Text style={styles.permissionSubtitle}>VaultExpense needs camera access to scan physical receipts.</Text>
        <TouchableOpacity style={styles.grantButton} onPress={requestPermission}>
          <Text style={styles.grantButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleCapture = async () => {
    setIsProcessing(true);
    
    // Simulate OCR processing delay
    setTimeout(async () => {
      setIsProcessing(false);
      const simulatedFailure = false; 

      if (simulatedFailure) {
        setShowFailModal(true);
      } else {
        await saveTransactionToLocalStore("Corner Market", 24.50, "#supplies");
        router.replace('/(tabs)/history');
      }
    }, 1500);
  };

  const saveTransactionToLocalStore = async (merch: string, amt: number, cat: string) => {
    try {
      const existing = await AsyncStorage.getItem('vault_transactions');
      const txs = existing ? JSON.parse(existing) : [];
      const newTx = {
        id: Date.now().toString(),
        merchant: merch,
        amount: amt,
        category: cat,
        timestamp: new Date().toISOString()
      };
      await AsyncStorage.setItem('vault_transactions', JSON.stringify([newTx, ...txs]));
    } catch (e) {
      console.error("Failed to save transaction", e);
    }
  };

  const handleManualSubmit = async () => {
    if (!merchant || !amount) return;
    await saveTransactionToLocalStore(merchant, parseFloat(amount), "#general");
    setShowFailModal(false);
    router.replace('/(tabs)/history');
  };

  return (
    <View style={styles.container}>
      {/* 
        Camera active prop is bound to isFocused. 
        When the user navigates away, active becomes false and pauses the camera stream.
      */}
      {isFocused && (
        <CameraView style={styles.camera} ref={cameraRef} active={isFocused}>
          <SafeAreaView style={styles.overlay}>
            
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Edge Vision OCR</Text>
              <View style={styles.badge}>
                <View style={styles.greenDot} />
                <Text style={styles.badgeText}>100% OFFLINE</Text>
              </View>
            </View>

            {/* Viewfinder Guide */}
            <View style={styles.viewfinderCenter}>
              <View style={styles.scannerFrame} />
              <Text style={styles.guideText}>Align receipt within frame</Text>
            </View>

            {/* Shutter Button */}
            <View style={styles.footer}>
              <TouchableOpacity 
                style={styles.captureButton} 
                onPress={handleCapture}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <View style={styles.innerShutter} />
                )}
              </TouchableOpacity>
            </View>

          </SafeAreaView>
        </CameraView>
      )}

      {/* OCR Fail State Modal */}
      <Modal visible={showFailModal} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons name="alert-circle-outline" size={36} color="#F59E0B" style={{ marginBottom: 8 }} />
            <Text style={styles.modalTitle}>OCR Extraction Unclear</Text>
            <Text style={styles.modalSubtitle}>Could not parse text automatically. Please enter details manually.</Text>

            <TextInput 
              style={styles.input} 
              placeholder="Merchant Name (e.g. Starbucks)" 
              placeholderTextColor="#94A3B8"
              value={merchant}
              onChangeText={setMerchant}
            />
            <TextInput 
              style={styles.input} 
              placeholder="Amount ($)" 
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleManualSubmit}>
              <Text style={styles.saveButtonText}>Save to Ledger</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={() => setShowFailModal(false)}>
              <Text style={styles.cancelButtonText}>Retake Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' },
  camera: { flex: 1 },
  overlay: { flex: 1, justifyContent: 'space-between', padding: 24 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  badge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(16, 185, 129, 0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999, borderWidth: 1, borderColor: '#10B981' },
  greenDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#10B981', marginRight: 6 },
  badgeText: { color: '#10B981', fontSize: 10, fontWeight: 'bold' },
  viewfinderCenter: { alignItems: 'center', justifyContent: 'center' },
  scannerFrame: { width: 260, height: 380, borderWidth: 2, borderColor: '#10B981', borderRadius: 16, borderStyle: 'dashed', backgroundColor: 'transparent' },
  guideText: { color: '#94A3B8', fontSize: 13, marginTop: 16, fontWeight: '500' },
  footer: { alignItems: 'center', paddingBottom: 20 },
  captureButton: { width: 76, height: 76, borderRadius: 38, borderWidth: 4, borderColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' },
  innerShutter: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#10B981' },
  permissionContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#F8FAFC' },
  permissionTitle: { fontSize: 20, fontWeight: 'bold', color: '#1E293B', marginBottom: 8 },
  permissionSubtitle: { fontSize: 14, color: '#64748B', textAlign: 'center', marginBottom: 24 },
  grantButton: { backgroundColor: '#10B981', paddingHorizontal: 24, paddingVertical: 14, borderRadius: 12 },
  grantButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#FFFFFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, paddingBottom: 40 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B', marginBottom: 4 },
  modalSubtitle: { fontSize: 13, color: '#64748B', marginBottom: 20 },
  input: { backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, color: '#1E293B', marginBottom: 12 },
  saveButton: { backgroundColor: '#10B981', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginTop: 8 },
  saveButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
  cancelButton: { paddingVertical: 14, alignItems: 'center', marginTop: 8 },
  cancelButtonText: { color: '#64748B', fontSize: 14, fontWeight: '600' }
});