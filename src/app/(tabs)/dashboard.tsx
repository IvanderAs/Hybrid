import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DashboardScreen() {
  const router = useRouter();


  const dummyTotal = 290.29;
  const dummyCount = 4;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.badgeContainer}>
          <Ionicons name="shield-checkmark" size={12} color="#047857" style={{ marginRight: 4 }} />
          <Text style={styles.badgeText}>DUMMY MODE ACTIVE</Text>
        </View>
        <TouchableOpacity style={styles.settingsIcon}>
          <Ionicons name="settings-outline" size={24} color="#64748B" />
        </TouchableOpacity>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Total Expenses (Dummy)</Text>
        <Text style={styles.summaryAmount}>${dummyTotal.toFixed(2)}</Text>
        <Text style={styles.summarySubtitle}>{dummyCount} receipts scanned this week</Text>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={styles.scanButton} 
          onPress={() => router.push('/capture')}
        >
          <Ionicons name="scan" size={24} color="#FFFFFF" style={{ marginRight: 8 }} />
          <Text style={styles.scanButtonText}>Scan Receipt</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 24 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, marginTop: 16 },
  badgeContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ECFDF5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999, borderWidth: 1, borderColor: '#A7F3D0' },
  badgeText: { fontSize: 10, fontWeight: 'bold', color: '#047857', letterSpacing: 0.5 },
  settingsIcon: { padding: 4 },
  summaryCard: { backgroundColor: '#FFFFFF', padding: 24, borderRadius: 24, borderWidth: 1, borderColor: '#E2E8F0', shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.05, shadowRadius: 16, elevation: 4, alignItems: 'center', marginBottom: 40 },
  summaryLabel: { fontSize: 14, fontWeight: '600', color: '#64748B', marginBottom: 12 },
  summaryAmount: { fontSize: 48, fontWeight: 'bold', color: '#1E293B', marginBottom: 12 },
  summarySubtitle: { fontSize: 13, color: '#94A3B8' },
  actionContainer: { alignItems: 'center' },
  scanButton: { flexDirection: 'row', backgroundColor: '#10B981', paddingVertical: 18, paddingHorizontal: 32, borderRadius: 16, alignItems: 'center', shadowColor: '#10B981', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 12, elevation: 6 },
  scanButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});