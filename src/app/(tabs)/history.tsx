import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getTransactions, initializeDatabase } from '../../../src/core/database/data';

export default function HistoryScreen() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    try {
      initializeDatabase();
      const data = getTransactions();
      if (data.length === 0) {
        setTransactions([
          { id: 1, merchant: 'MicroCenter Depot', amount: -142.50, category: 'HARDWARE', confidence: '99.4%', timestamp: 'Today, 2:15 PM' },
          { id: 2, merchant: 'Nordic Roast Coffee Lab', amount: -6.80, category: 'DINING', confidence: '98.1%', timestamp: 'Yesterday' },
        ]);
      } else {
        setTransactions(data);
      }
    } catch (e) {
      console.error('Failed to load ledger:', e);
    }
  }, []);

  const filteredTransactions = transactions.filter(t => 
    t.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transaction Ledger</Text>
        <Text style={styles.subHeaderTitle}>Local SQLite Database</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#94A3B8" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search merchants, categories..."
          placeholderTextColor="#94A3B8"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.transactionCard}
            onPress={() => router.push({
              pathname: '/transaction-detail',
              params: { 
                id: item.id, 
                merchant: item.merchant, 
                amount: item.amount, 
                category: item.category, 
                confidence: item.confidence || '99.0%',
                timestamp: item.timestamp || item.created_at 
              }
            } as any)}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.merchantName}>{item.merchant}</Text>
              <Text style={styles.timestamp}>{item.timestamp || item.created_at}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.amount}>${Math.abs(item.amount).toFixed(2)}</Text>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.category} [{item.confidence || '100%'}]</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { paddingHorizontal: 20, paddingVertical: 16, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  subHeaderTitle: { fontSize: 12, color: '#64748B', marginTop: 2 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', margin: 20, marginBottom: 10, paddingHorizontal: 14, paddingVertical: 10, borderRadius: 12, borderWidth: 1, borderColor: '#F1F5F9' },
  searchInput: { flex: 1, fontSize: 14, color: '#1E293B' },
  transactionCard: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#F1F5F9', marginBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  merchantName: { fontSize: 14, fontWeight: 'bold', color: '#1E293B', marginBottom: 4 },
  timestamp: { fontSize: 11, color: '#94A3B8' },
  amount: { fontSize: 15, fontWeight: 'bold', color: '#0F172A', marginBottom: 4 },
  tag: { backgroundColor: '#ECFDF5', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  tagText: { fontSize: 9, fontWeight: '700', color: '#047857' }
});