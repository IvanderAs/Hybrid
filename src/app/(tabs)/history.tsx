import { Ionicons } from '@expo/vector-icons';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

// Replaced with dummy data for the UI
const DUMMY_TRANSACTIONS = [
  { id: '1', merchant: 'Nordic Coffee Lab', amount: 12.50, category: 'DINING', date: 'Today, 08:45 AM' },
  { id: '2', merchant: 'MicroCenter Depot', amount: 142.00, category: 'HARDWARE', date: 'Yesterday, 14:20 PM' },
  { id: '3', merchant: 'Shell Fuel Station', amount: 45.80, category: 'LOGISTICS', date: 'Oct 25, 09:15 AM' },
  { id: '4', merchant: 'Office Depot', amount: 89.99, category: 'SUPPLIES', date: 'Oct 24, 16:30 PM' },
];

export default function HistoryScreen() {
  const renderItem = ({ item }: { item: typeof DUMMY_TRANSACTIONS[0] }) => (
    <View style={styles.transactionCard}>
      <View style={styles.iconContainer}>
        <Ionicons name="receipt-outline" size={20} color="#10B981" />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.merchantText}>{item.merchant}</Text>
        <Text style={styles.categoryText}>{item.category} • {item.date}</Text>
      </View>
      <Text style={styles.amountText}>${item.amount.toFixed(2)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Local Ledger</Text>
        <Text style={styles.headerSubtitle}>Dummy Offline Data</Text>
      </View>

      <FlatList
        data={DUMMY_TRANSACTIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { padding: 24, paddingBottom: 16 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1E293B' },
  headerSubtitle: { fontSize: 13, color: '#64748B', marginTop: 4 },
  listContent: { paddingHorizontal: 24, paddingBottom: 40 },
  transactionCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 16, borderRadius: 16, marginBottom: 12, borderWidth: 1, borderColor: '#F1F5F9', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  iconContainer: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#ECFDF5', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  detailsContainer: { flex: 1 },
  merchantText: { fontSize: 15, fontWeight: 'bold', color: '#1E293B', marginBottom: 4 },
  categoryText: { fontSize: 12, color: '#64748B' },
  amountText: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' }
});