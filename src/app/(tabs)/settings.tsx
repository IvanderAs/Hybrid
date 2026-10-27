import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerIcon}>
        <Ionicons name="shield-checkmark-outline" size={28} color="#059669" />
      </View>
      <Text style={styles.title}>Vault & Security Settings</Text>
      <Text style={styles.subtitle}>
        Create a local account for this device. Your username and PIN verifier
        are stored in the local SQLite database.
      </Text>

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push('/register')}
        style={({ pressed }) => [styles.actionButton, pressed && styles.pressed]}
      >
        <View style={styles.actionIcon}>
          <Ionicons name="person-add-outline" size={21} color="#059669" />
        </View>
        <View style={styles.actionTextBlock}>
          <Text style={styles.actionTitle}>Create local account</Text>
          <Text style={styles.actionSubtitle}>
            Register a username and device PIN
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#64748B" />
      </Pressable>

      <View style={styles.note}>
        <Ionicons name="information-circle-outline" size={19} color="#64748B" />
        <Text style={styles.noteText}>
          Expo Go stores SQLite data locally but does not encrypt the database
          file. Database encryption can be added later with SQLCipher in a
          development build.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 24,
    paddingTop: 38,
  },
  headerIcon: {
    width: 56,
    height: 56,
    borderRadius: 17,
    backgroundColor: '#D1FAE5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#0F172A',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  subtitle: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 9,
    marginBottom: 26,
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 17,
    minHeight: 82,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  actionIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionTextBlock: {
    flex: 1,
  },
  actionTitle: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '800',
  },
  actionSubtitle: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 5,
  },
  pressed: {
    opacity: 0.75,
  },
  note: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 9,
    marginTop: 22,
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#F1F5F9',
  },
  noteText: {
    flex: 1,
    color: '#475569',
    fontSize: 12,
    lineHeight: 18,
  },
});
