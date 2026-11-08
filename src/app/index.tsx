import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
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
  
  // Modes: 'register' | 'login' | 'reset'
  const [authMode, setAuthMode] = useState<'register' | 'login' | 'reset'>('register');
  
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = () => {
    setErrorMsg('');
    setSuccessMsg('');

    if (authMode === 'register') {
      if (!username.trim()) {
        return setErrorMsg('Please enter a username.');
      }
      if (pin.length < 4) {
        return setErrorMsg('PIN must be at least 4 digits.');
      }
      if (pin !== confirmPin) {
        return setErrorMsg('PINs do not match.');
      }
      // Success: Proceed to dashboard
      router.replace('/(tabs)/dashboard');

    } else if (authMode === 'login') {
      if (!pin) {
        return setErrorMsg('Please enter your PIN.');
      }
      // Success: Proceed to dashboard
      router.replace('/(tabs)/dashboard');

    } else if (authMode === 'reset') {
      if (pin.length < 4) {
        return setErrorMsg('Please enter your new 4+ digit PIN.');
      }
      if (pin !== confirmPin) {
        return setErrorMsg('PINs do not match.');
      }
      
      // Simulate wiping old local credentials and setting new ones
      setSuccessMsg('Vault successfully reset! You can now log in.');
      setTimeout(() => {
        setAuthMode('login');
        setPin('');
        setConfirmPin('');
        setSuccessMsg('');
      }, 1500);
    }
  };

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
              {authMode === 'register' && 'Create Your Vault'}
              {authMode === 'login' && 'Welcome Back'}
              {authMode === 'reset' && 'Reset Local Vault'}
            </Text>
            <Text style={styles.cardSubtitle}>
              {authMode === 'register' && 'Set up your offline profile and secure PIN.'}
              {authMode === 'login' && 'Enter your PIN to unlock your local ledger.'}
              {authMode === 'reset' && 'Since this app is 100% offline, resetting clears old credentials and sets a new PIN.'}
            </Text>

            {errorMsg ? (
              <View style={styles.errorBox}>
                <Ionicons name="warning-outline" size={16} color="#EF4444" />
                <Text style={styles.errorText}>{errorMsg}</Text>
              </View>
            ) : null}

            {successMsg ? (
              <View style={styles.successBox}>
                <Ionicons name="checkmark-circle-outline" size={16} color="#10B981" />
                <Text style={styles.successText}>{successMsg}</Text>
              </View>
            ) : null}

            {/* Username field only shows during Registration */}
            {authMode === 'register' && (
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

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>
                {authMode === 'login' ? 'Enter PIN' : authMode === 'register' ? 'Create PIN' : 'New PIN'}
              </Text>
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

            {/* Confirm PIN shows during Registration and Reset */}
            {authMode !== 'login' && (
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>
                  {authMode === 'register' ? 'Confirm PIN' : 'Confirm New PIN'}
                </Text>
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

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>
                {authMode === 'register' && 'Register Account'}
                {authMode === 'login' && 'Unlock Vault'}
                {authMode === 'reset' && 'Reset Vault PIN'}
              </Text>
              <Ionicons 
                name={authMode === 'login' ? "key-outline" : "arrow-forward"} 
                size={18} 
                color="#FFFFFF" 
                style={{ marginLeft: 8 }} 
              />
            </TouchableOpacity>

            {/* Footer Navigation Switchers */}
            <View style={styles.footerSwitchContainer}>
              {authMode === 'login' ? (
                <>
                  <TouchableOpacity onPress={() => { setAuthMode('reset'); setErrorMsg(''); setPin(''); setConfirmPin(''); }}>
                    <Text style={styles.linkText}>Forgot PIN?</Text>
                  </TouchableOpacity>
                  <Text style={styles.dotSeparator}>•</Text>
                  <TouchableOpacity onPress={() => { setAuthMode('register'); setErrorMsg(''); setPin(''); setConfirmPin(''); }}>
                    <Text style={styles.linkText}>Create Account</Text>
                  </TouchableOpacity>
                </>
              ) : authMode === 'reset' ? (
                <TouchableOpacity onPress={() => { setAuthMode('login'); setErrorMsg(''); setPin(''); setConfirmPin(''); }}>
                  <Text style={styles.linkText}>Remembered PIN? Back to Login</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => { setAuthMode('login'); setErrorMsg(''); setPin(''); setConfirmPin(''); }}>
                  <Text style={styles.linkText}>Already have an account? Login</Text>
                </TouchableOpacity>
              )}
            </View>

          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
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
  successBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ECFDF5', padding: 12, borderRadius: 8, marginBottom: 16, borderWidth: 1, borderColor: '#A7F3D0' },
  successText: { color: '#047857', fontSize: 13, marginLeft: 8, fontWeight: '500' },
  inputGroup: { marginBottom: 16 },
  inputLabel: { fontSize: 12, fontWeight: '600', color: '#475569', marginBottom: 6, marginLeft: 4 },
  inputField: { backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14, fontSize: 18, color: '#1E293B', fontWeight: 'bold' },
  submitButton: { backgroundColor: '#10B981', flexDirection: 'row', paddingVertical: 16, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginTop: 12 },
  submitButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
  footerSwitchContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 18 },
  linkText: { color: '#10B981', fontSize: 13, fontWeight: '600', paddingVertical: 4 },
  dotSeparator: { color: '#94A3B8', marginHorizontal: 8 }
});