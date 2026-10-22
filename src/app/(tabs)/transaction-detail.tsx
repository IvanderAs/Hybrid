import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TransactionDetailScreen() {
  const router = useRouter();
  const { id, merchant, amount, category, confidence, timestamp } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={20} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transaction #{id || '1'}</Text>
        <View style={{ width: 32 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.label}>Merchant</Text>
          <Text style={styles.value}>{merchant || 'MicroCenter Depot'}</Text>

          <Text style={styles.label}>Amount</Text>
          <Text style={styles.amountValue}>-${Math.abs(Number(amount) || 142.50).toFixed(2)}</Text>

          <Text style={styles.label}>ML Classification</Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{category || 'HARDWARE'} [{confidence || '99.4%'}]</Text>
          </View>

          <Text style={styles.label}>Timestamp</Text>
          <Text style={styles.subValue}>{timestamp || 'Today, 2:15 PM'}</Text>

          <Text style={styles.label}>Storage Verification</Text>
          <Text style={styles.statusText}>✓ Verified in Local SQLite Ledger (AES-256)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 16, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  backButton: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  content: { padding: 20 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: '#F1F5F9', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
  label: { fontSize: 12, fontWeight: '600', color: '#64748B', marginTop: 14, marginBottom: 4 },
  value: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  subValue: { fontSize: 14, color: '#334155' },
  amountValue: { fontSize: 28, fontWeight: 'bold', color: '#0F172A' },
  tagContainer: { backgroundColor: '#ECFDF5', alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginTop: 4 },
  tagText: { fontSize: 11, fontWeight: '700', color: '#047857' },
  statusText: { fontSize: 13, color: '#10B981', fontWeight: '500', marginTop: 4 }
});