import { Ionicons } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

// 🚨 REMOVED: import { addTransaction } from '../core/database/db';

export default function CaptureScreen() {
  const router = useRouter();
  const [facing, setFacing] = useState<'back' | 'front'>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showManualModal, setShowManualModal] = useState(false);

  // Manual fallback form state
  const [merchant, setMerchant] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('OPERATIONS');

  const cameraRef = useRef<any>(null);

  // 1. Handle permissions loading state
  if (!permission) {
    return <View style={styles.centerContainer}><ActivityIndicator size="large" color="#10B981" /></View>;
  }

  // 2. Handle permission denied state
  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.permissionContainer}>
        <Ionicons name="camera-outline" size={64} color="#64748B" />
        <Text style={styles.permissionTitle}>Camera Access Required</Text>
        <Text style={styles.permissionDesc}>
          VaultExpense operates 100% locally. Camera access is required to scan physical receipts for on-device OCR.
        </Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // 3. Handle shutter capture action
  const handleCapture = async () => {
    if (!cameraRef.current) return;

    try {
      setIsProcessing(true);
      
      // Take picture using Expo Camera
      const photo = await cameraRef.current.takePictureAsync({ skipProcessing: false });
      
      // Simulate non-blocking edge OCR processing & Naive Bayes classification
      setTimeout(() => {
        setIsProcessing(false);
        
        // Randomly simulate successful OCR or trigger fail-state fallback modal
        const isSuccessfulOCR = Math.random() > 0.2; // 80% success mock

        if (isSuccessfulOCR) {
          const mockVendors = ['Nordic Coffee Lab', 'MicroCenter Depot', 'Shell Fuel Station', 'Office Depot'];
          const mockAmounts = [12.50, 142.00, 45.80, 89.99];
          const mockCategories = ['DINING', 'HARDWARE', 'LOGISTICS', 'SUPPLIES'];
          
          const randomIndex = Math.floor(Math.random() * mockVendors.length);
          const scannedMerchant = mockVendors[randomIndex];
          const scannedAmount = mockAmounts[randomIndex];
          const scannedCategory = mockCategories[randomIndex];

          // Replaced with a dummy console log for testing
          console.log(`Dummy OCR Success: ${scannedMerchant} - $${scannedAmount}`);

          Alert.alert(
            'Receipt Archived Locally',
            `Successfully parsed ${scannedMerchant} for $${scannedAmount.toFixed(2)} via Edge Vision.`,
            [{ text: 'View Ledger', onPress: () => router.replace('/(tabs)/history') }]
          );
        } else {
          // Trigger OCR Fail-State Fallback Modal
          setShowManualModal(true);
        }
      }, 1500);

    } catch (error) {
      setIsProcessing(false);
      Alert.alert('Capture Error', 'Failed to capture receipt image from camera hardware.');
    }
  };

  const handleManualSave = () => {
    if (!merchant.trim() || !amount) {
      Alert.alert('Validation Error', 'Please enter both a merchant name and a valid amount.');
      return;
    }

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) {
      Alert.alert('Validation Error', 'Amount must be a valid number.');
      return;
    }

    // Replaced with a dummy console log for testing
    console.log(`Dummy Manual Save: ${merchant.trim()} - $${numericAmount}`);
    
    setShowManualModal(false);
    router.replace('/(tabs)/history');
  };

  return (
    <View style={styles.container}>
      {/* Camera Viewfinder Stream */}
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        
        {/* Top Control Header */}
        <SafeAreaView style={styles.topHeader}>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
            <Ionicons name="close" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.secureBadge}>
            <Ionicons name="shield-checkmark" size={12} color="#10B981" style={{ marginRight: 4 }} />
            <Text style={styles.secureBadgeText}>EDGE VISION ML ACTIVE</Text>
          </View>
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={() => setFacing(current => (current === 'back' ? 'front' : 'back'))}
          >
            <Ionicons name="camera-reverse-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </SafeAreaView>

        {/* Framing Guides / Viewfinder Overlay */}
        <View style={styles.viewfinderCenter}>
          <View style={styles.scannerFrame}>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </View>
          <Text style={styles.instructionText}>Align receipt inside boundary for zero-cloud OCR</Text>
        </View>

        {/* Bottom Shutter & Controls */}
        <View style={styles.bottomControls}>
          {isProcessing ? (
            <View style={styles.processingContainer}>
              <ActivityIndicator size="large" color="#10B981" />
              <Text style={styles.processingText}>Extracting text & categorizing locally...</Text>
            </View>
          ) : (
            <View style={styles.shutterRow}>
              <TouchableOpacity style={styles.manualEntryButton} onPress={() => setShowManualModal(true)}>
                <Ionicons name="create-outline" size={20} color="#FFFFFF" />
                <Text style={styles.manualButtonText}>Manual</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.shutterOuter} onPress={handleCapture} activeOpacity={0.8}>
                <View style={styles.shutterInner} />
              </TouchableOpacity>

              <View style={{ width: 64 }} /> {/* Spacer to balance flex layout */}
            </View>
          )}
        </View>

      </CameraView>

      {/* OCR Fail-State / Manual Fallback Modal */}
      <Modal visible={showManualModal} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>OCR Fail-State Recovery</Text>
              <TouchableOpacity onPress={() => setShowManualModal(false)}>
                <Ionicons name="close" size={22} color="#64748B" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalSubtitle}>Receipt text was unreadable or crumpled. Enter details manually to commit to local ledger.</Text>

            <Text style={styles.inputLabel}>Merchant Name</Text>
            <TextInput 
              style={styles.textInput} 
              placeholder="e.g. Office Supplies Co." 
              placeholderTextColor="#94A3B8"
              value={merchant}
              onChangeText={setMerchant}
            />

            <Text style={styles.inputLabel}>Amount ($)</Text>
            <TextInput 
              style={styles.textInput} 
              placeholder="0.00" 
              placeholderTextColor="#94A3B8"
              keyboardType="decimal-pad"
              value={amount}
              onChangeText={setAmount}
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleManualSave}>
              <Text style={styles.saveButtonText}>Commit to Local Ledger</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' },
  camera: { flex: 1, justifyContent: 'space-between' },
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10 },
  iconButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center', justifyContent: 'center' },
  secureBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(16, 185, 129, 0.2)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999, borderWidth: 1, borderColor: '#10B981' },
  secureBadgeText: { color: '#10B981', fontSize: 10, fontWeight: 'bold', letterSpacing: 0.5 },
  viewfinderCenter: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  scannerFrame: { width: 280, height: 400, borderWidth: 2, borderColor: 'transparent', position: 'relative', justifyContent: 'center', alignItems: 'center' },
  corner: { position: 'absolute', width: 24, height: 24, borderColor: '#10B981', borderWidth: 4 },
  topLeft: { top: 0, left: 0, borderBottomWidth: 0, borderRightWidth: 0 },
  topRight: { top: 0, right: 0, borderBottomWidth: 0, borderLeftWidth: 0 },
  bottomLeft: { bottom: 0, left: 0, borderTopWidth: 0, borderRightWidth: 0 },
  bottomRight: { bottom: 0, right: 0, borderTopWidth: 0, borderLeftWidth: 0 },
  instructionText: { color: '#FFFFFF', fontSize: 12, marginTop: 24, backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, overflow: 'hidden' },
  bottomControls: { paddingBottom: 40, paddingHorizontal: 24, alignItems: 'center' },
  shutterRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' },
  shutterOuter: { width: 76, height: 76, borderRadius: 38, borderWidth: 4, borderColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' },
  shutterInner: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#10B981' },
  manualEntryButton: { alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', width: 64, height: 64, borderRadius: 32, borderWidth: 1, borderColor: '#334155' },
  manualButtonText: { color: '#FFFFFF', fontSize: 10, fontWeight: '600', marginTop: 2 },
  processingContainer: { alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 20, borderRadius: 16, width: '100%' },
  processingText: { color: '#FFFFFF', fontSize: 13, fontWeight: '500', marginTop: 12 },
  permissionContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#F8FAFC' },
  permissionTitle: { fontSize: 20, fontWeight: 'bold', color: '#1E293B', marginTop: 16, marginBottom: 8 },
  permissionDesc: { fontSize: 14, color: '#64748B', textAlign: 'center', marginBottom: 24, lineHeight: 20 },
  permissionButton: { backgroundColor: '#10B981', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 12, width: '100%', alignItems: 'center', marginBottom: 12 },
  permissionButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
  cancelButton: { paddingVertical: 12, width: '100%', alignItems: 'center' },
  cancelButtonText: { color: '#64748B', fontSize: 14, fontWeight: '600' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#FFFFFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, paddingBottom: 40 },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B', flex: 1 },
  modalSubtitle: { fontSize: 13, color: '#64748B', marginBottom: 20, lineHeight: 18 },
  inputLabel: { fontSize: 12, fontWeight: '600', color: '#475569', marginBottom: 6 },
  textInput: { backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 15, color: '#1E293B', marginBottom: 16 },
  saveButton: { backgroundColor: '#10B981', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginTop: 8 },
  saveButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' }
});