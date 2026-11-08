import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function AuthScreen() {
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // Force wipe storage on launch/reload so Expo Go starts fresh
    const resetOnReload = async () => {
      try {
        await AsyncStorage.clear();
      } catch (e) {
        console.error('Error resetting storage on reload', e);
      } finally {
        setIsLoading(false);
      }
    };

    resetOnReload();
  }, []);

  const handleRegister = async () => {
    setErrorMsg('');

    if (!username.trim()) {
      return setErrorMsg('Please enter a username.');
    }
    if (pin.length < 4) {
      return setErrorMsg('PIN must be at least 4 digits.');
    }
    if (pin !== confirmPin) {
      return setErrorMsg('PINs do not match.');
    }

    try {
      // Remember username & PIN during registration
      await AsyncStorage.setItem('vault_username', username.trim());
      await AsyncStorage.setItem('vault_pin', pin);
      router.replace('/(tabs)/dashboard');
    } catch (e) {
      setErrorMsg('Failed to save registration.');
    }
  };

  const handleLogin = async () => {
    setErrorMsg('');

    if (!pin) {
      return setErrorMsg('Please enter your PIN.');
    }

    try {
      const storedPin = await AsyncStorage.getItem('vault_pin');
      
      // Verification (or bypass if first-time toggle without saved PIN)
      if (storedPin && pin !== storedPin) {
        setErrorMsg('Incorrect PIN. Please try again.');
        setPin('');
        return;
      }

      router.replace('/(tabs)/dashboard');
    } catch (e) {
      setErrorMsg('Error verifying PIN.');
    }
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#10B981" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          
          {/* Header Branding */}
          <View style={styles.headerContainer}>
            <View style={styles.logoIconBox}>
              <Ionicons name="wallet" size={32} color="#ffffff" />
            </View>
            <Text style={styles.appTitle}>VaultExpense</Text>
            <View style={styles.badgeContainer}>
              <Ionicons name="shield-checkmark" size={10} color="#047857" style={{ marginRight: 4 }} />
              <Text style={styles.badgeText}>OFFLINE SECURE</Text>
            </View>
          </View>

          {/* Dynamic Card Container */}
          <View style={styles.authCard}>
            <Text style={styles.cardTitle}>
              {isLoginMode ? 'Welcome Back' : 'Create Your Vault'}
            </Text>
            <Text style={styles.cardSubtitle}>
              {isLoginMode 
                ? 'Enter your PIN to unlock your local ledger.' 
                : 'Set up your offline profile and secure PIN.'}
            </Text>

            {errorMsg ? (
              <View style={styles.errorBox}>
                <Ionicons name="warning-outline" size={16} color="#EF4444" />
                <Text style={styles.errorText}>{errorMsg}</Text>
              </View>
            ) : null}

            {/* Username field ONLY displays during Registration */}
            {!isLoginMode && (
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="e.g. Satoshi"
                  placeholderTextColor="#94A3B8"
                  value={username}
                  onChangeText={setUsername}
                  autoCorrect={false}
                />
              </View>
            )}

            {/* PIN field for both Registration and Login */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>{isLoginMode ? 'Enter PIN' : 'Create PIN'}</Text>
              <TextInput
                style={[styles.inputField, { letterSpacing: 4, textAlign: 'center' }]}
                placeholder="****"
                placeholderTextColor="#94A3B8"
                keyboardType="number-pad"
                secureTextEntry
                maxLength={8}
                value={pin}
                onChangeText={setPin}
              />
            </View>

            {/* Confirm PIN field ONLY displays during Registration */}
            {!isLoginMode && (
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Confirm PIN</Text>
                <TextInput
                  style={[styles.inputField, { letterSpacing: 4, textAlign: 'center' }]}
                  placeholder="****"
                  placeholderTextColor="#94A3B8"
                  keyboardType="number-pad"
                  secureTextEntry
                  maxLength={8}
                  value={confirmPin}
                  onChangeText={setConfirmPin}
                />
              </View>
            )}

            <TouchableOpacity 
              style={styles.submitButton} 
              onPress={isLoginMode ? handleLogin : handleRegister}
            >
              <Text style={styles.submitButtonText}>
                {isLoginMode ? 'Unlock Vault' : 'Register Account'}
              </Text>
              <Ionicons 
                name={isLoginMode ? "key-outline" : "arrow-forward"} 
                size={18} 
                color="#FFFFFF" 
                style={{ marginLeft: 8 }} 
              />
            </TouchableOpacity>

            {/* Toggle Switch Button */}
            <TouchableOpacity 
              style={styles.switchButton} 
              onPress={() => {
                setIsLoginMode(!isLoginMode);
                setErrorMsg('');
                setPin('');
                setConfirmPin('');
              }}
            >
              <Text style={styles.switchButtonText}>
                {isLoginMode 
                  ? "Don't have an account? Register" 
                  : "Already have an account? Login"}
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  center: { justifyContent: 'center', alignItems: 'center' },
  keyboardView: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', padding: 24 },
  headerContainer: { alignItems: 'center', marginBottom: 40 },
  logoIconBox: { width: 64, height: 64, borderRadius: 16, backgroundColor: '#10B981', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  appTitle: { fontSize: 24, fontWeight: 'bold', color: '#1E293B', marginBottom: 12 },
  badgeContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ECFDF5', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999, borderWidth: 1, borderColor: '#A7F3D0' },
  badgeText: { fontSize: 10, fontWeight: 'bold', color: '#047857', letterSpacing: 0.5 },
  authCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 24, borderWidth: 1, borderColor: '#F1F5F9', elevation: 4 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#1E293B', marginBottom: 8, textAlign: 'center' },
  cardSubtitle: { fontSize: 13, color: '#64748B', textAlign: 'center', marginBottom: 24, lineHeight: 18 },
  errorBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FEF2F2', padding: 12, borderRadius: 8, marginBottom: 16, borderWidth: 1, borderColor: '#FECACA' },
  errorText: { color: '#B91C1C', fontSize: 13, marginLeft: 8, fontWeight: '500' },
  inputGroup: { marginBottom: 16 },
  inputLabel: { fontSize: 12, fontWeight: '600', color: '#475569', marginBottom: 6, marginLeft: 4 },
  inputField: { backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14, fontSize: 18, color: '#1E293B', fontWeight: 'bold' },
  submitButton: { backgroundColor: '#10B981', flexDirection: 'row', paddingVertical: 16, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginTop: 12 },
  submitButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
  switchButton: { marginTop: 16, alignItems: 'center', paddingVertical: 8 },
  switchButtonText: { color: '#10B981', fontSize: 13, fontWeight: '600' }
});