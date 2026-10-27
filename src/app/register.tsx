import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { registerLocalAccount } from '../core/database/auth';

const USERNAME_PATTERN = /^[A-Za-z0-9._-]{3,24}$/;
const PIN_PATTERN = /^\d{6,12}$/;

export default function RegisterScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [created, setCreated] = useState(false);

  async function handleRegister() {
    setErrorMessage('');

    const cleanUsername = username.trim();

    if (!USERNAME_PATTERN.test(cleanUsername)) {
      setErrorMessage(
        'Username must be 3–24 characters and use only letters, numbers, dots, underscores, or hyphens.'
      );
      return;
    }

    if (!PIN_PATTERN.test(pin)) {
      setErrorMessage('Your PIN must contain 6–12 digits.');
      return;
    }

    if (pin !== confirmPin) {
      setErrorMessage('The PINs do not match. Please try again.');
      return;
    }

    setIsSaving(true);

    try {
      await registerLocalAccount(cleanUsername, pin);
      setPin('');
      setConfirmPin('');
      setCreated(true);
    } catch (error) {
      if (error instanceof Error && error.message === 'USERNAME_EXISTS') {
        setErrorMessage('That username is already registered on this device.');
      } else {
        setErrorMessage('The account could not be saved. Please try again.');
      }
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topRow}>
            <View style={styles.brandIcon}>
              <Ionicons name="shield-checkmark" size={25} color="#FFFFFF" />
            </View>
            <View>
              <Text style={styles.brandName}>VAULT EXPENSE</Text>
              <Text style={styles.brandCaption}>PRIVATE BY DESIGN</Text>
            </View>
          </View>

          {created ? (
            <View style={styles.successCard}>
              <View style={styles.successIcon}>
                <Ionicons name="checkmark-circle" size={52} color="#059669" />
              </View>
              <Text style={styles.title}>Account created</Text>
              <Text style={styles.subtitle}>
                Your account has been saved to this device. Your PIN itself was
                not stored in the database.
              </Text>

              <View style={styles.successNotice}>
                <Ionicons name="phone-portrait-outline" size={19} color="#047857" />
                <Text style={styles.successNoticeText}>
                  This account is local to this device. It is not synced to a
                  server or cloud account.
                </Text>
              </View>

              <Pressable
                accessibilityRole="button"
                onPress={() => router.replace('/(tabs)/settings')}
                style={({ pressed }) => [
                  styles.primaryButton,
                  pressed && styles.buttonPressed,
                ]}
              >
                <Text style={styles.primaryButtonText}>Return to Security</Text>
                <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
              </Pressable>
            </View>
          ) : (
            <>
              <View style={styles.headingBlock}>
                <Text style={styles.eyebrow}>GET STARTED</Text>
                <Text style={styles.title}>Create your local account.</Text>
                <Text style={styles.subtitle}>
                  Set a username and PIN to create an account stored on this
                  device.
                </Text>
              </View>

              <View style={styles.formCard}>
                <Text style={styles.label}>Username</Text>
                <View style={styles.inputShell}>
                  <Ionicons name="person-outline" size={19} color="#64748B" />
                  <TextInput
                    accessibilityLabel="Username"
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!isSaving}
                    onChangeText={setUsername}
                    placeholder="e.g. ivander_01"
                    placeholderTextColor="#94A3B8"
                    returnKeyType="next"
                    style={styles.input}
                    value={username}
                  />
                </View>
                <Text style={styles.helperText}>
                  3–24 characters: letters, numbers, ., _ or -
                </Text>

                <Text style={[styles.label, styles.labelSpaced]}>PIN</Text>
                <View style={styles.inputShell}>
                  <Ionicons name="key-outline" size={19} color="#64748B" />
                  <TextInput
                    accessibilityLabel="PIN"
                    autoCapitalize="none"
                    editable={!isSaving}
                    keyboardType="number-pad"
                    maxLength={12}
                    onChangeText={(value) => setPin(value.replace(/\D/g, ''))}
                    placeholder="Enter 6–12 digits"
                    placeholderTextColor="#94A3B8"
                    secureTextEntry
                    style={styles.input}
                    value={pin}
                  />
                </View>

                <Text style={[styles.label, styles.labelSpaced]}>
                  Confirm PIN
                </Text>
                <View style={styles.inputShell}>
                  <Ionicons name="lock-closed-outline" size={19} color="#64748B" />
                  <TextInput
                    accessibilityLabel="Confirm PIN"
                    editable={!isSaving}
                    keyboardType="number-pad"
                    maxLength={12}
                    onChangeText={(value) =>
                      setConfirmPin(value.replace(/\D/g, ''))
                    }
                    onSubmitEditing={handleRegister}
                    placeholder="Re-enter your PIN"
                    placeholderTextColor="#94A3B8"
                    returnKeyType="done"
                    secureTextEntry
                    style={styles.input}
                    value={confirmPin}
                  />
                </View>

                <View style={styles.securityHint}>
                  <Ionicons name="information-circle-outline" size={18} color="#047857" />
                  <Text style={styles.securityHintText}>
                    A longer PIN is safer. Choose one you do not use for your
                    bank or other important accounts.
                  </Text>
                </View>

                {errorMessage ? (
                  <View style={styles.errorBox}>
                    <Ionicons name="alert-circle-outline" size={18} color="#B91C1C" />
                    <Text style={styles.errorText}>{errorMessage}</Text>
                  </View>
                ) : null}

                <Pressable
                  accessibilityRole="button"
                  disabled={isSaving}
                  onPress={handleRegister}
                  style={({ pressed }) => [
                    styles.primaryButton,
                    (pressed || isSaving) && styles.buttonPressed,
                  ]}
                >
                  {isSaving ? (
                    <ActivityIndicator color="#FFFFFF" />
                  ) : (
                    <>
                      <Text style={styles.primaryButtonText}>Create account</Text>
                      <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
                    </>
                  )}
                </Pressable>
              </View>

              <View style={styles.footerNote}>
                <Ionicons name="cloud-offline-outline" size={17} color="#64748B" />
                <Text style={styles.footerText}>
                  Works offline. Your account details are saved locally.
                </Text>
              </View>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 34,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 38,
  },
  brandIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    color: '#0F172A',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.6,
  },
  brandCaption: {
    color: '#64748B',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.8,
    marginTop: 4,
  },
  headingBlock: {
    marginBottom: 24,
  },
  eyebrow: {
    color: '#059669',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 9,
  },
  title: {
    color: '#0F172A',
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  subtitle: {
    color: '#64748B',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 20,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 18,
    elevation: 2,
  },
  label: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 9,
  },
  labelSpaced: {
    marginTop: 20,
  },
  inputShell: {
    minHeight: 54,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 11,
  },
  input: {
    flex: 1,
    minHeight: 52,
    color: '#0F172A',
    fontSize: 15,
    paddingVertical: 0,
  },
  helperText: {
    marginTop: 7,
    color: '#64748B',
    fontSize: 12,
    lineHeight: 17,
  },
  securityHint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ECFDF5',
    borderRadius: 12,
    padding: 12,
    gap: 9,
    marginTop: 20,
  },
  securityHintText: {
    flex: 1,
    color: '#065F46',
    fontSize: 12,
    lineHeight: 18,
  },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FEF2F2',
    borderRadius: 12,
    padding: 12,
    gap: 9,
    marginTop: 16,
  },
  errorText: {
    flex: 1,
    color: '#991B1B',
    fontSize: 13,
    lineHeight: 19,
  },
  primaryButton: {
    minHeight: 54,
    backgroundColor: '#059669',
    borderRadius: 14,
    paddingHorizontal: 18,
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  buttonPressed: {
    opacity: 0.78,
  },
  footerNote: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 22,
    paddingHorizontal: 10,
  },
  footerText: {
    color: '#64748B',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    flexShrink: 1,
  },
  successCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 24,
    marginTop: 16,
  },
  successIcon: {
    marginBottom: 18,
  },
  successNotice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ECFDF5',
    padding: 13,
    borderRadius: 12,
    gap: 9,
    marginTop: 22,
  },
  successNoticeText: {
    flex: 1,
    color: '#065F46',
    fontSize: 13,
    lineHeight: 19,
  },
});
