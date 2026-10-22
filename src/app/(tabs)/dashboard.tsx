import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIconBox}>
            <Ionicons name="wallet-outline" size={18} color="#ffffff" />
          </View>
          <Text style={styles.logoText}>VaultExpense</Text>
        </View>

        <View style={styles.badgeContainer}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>100% LOCAL</Text>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section (Monthly Expenses Card) */}
        <View style={styles.heroCard}>
          <Text style={styles.heroSubtitle}>Current Month Expenses</Text>
          <Text style={styles.heroAmount}>$3,842.60</Text>
          
          <View style={styles.heroFooter}>
            <View style={styles.heroStatusRow}>
              <Ionicons name="shield-checkmark-outline" size={16} color="#10B981" />
              <Text style={styles.heroStatusText}>Encrypted SQLite Ledger Active</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/analytics' as any)}>
              <Text style={styles.heroStatsLink}>View Stats →</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Action Grid */}
        <View style={styles.actionGrid}>
          <TouchableOpacity 
            style={styles.primaryActionButton}
            onPress={() => router.push('/capture' as any)}
          >
            <Ionicons name="scan-outline" size={20} color="#ffffff" />
            <Text style={styles.primaryActionText}>Scan Receipt</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryActionButton}
            onPress={() => router.push('/settings' as any)}
          >
            <Ionicons name="download-outline" size={20} color="#334155" />
            <Text style={styles.secondaryActionText}>Export CSV</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryActionButton}
            onPress={() => router.push('/analytics' as any)}
          >
            <Ionicons name="pie-chart-outline" size={20} color="#334155" />
            <Text style={styles.secondaryActionText}>Budgets</Text>
          </TouchableOpacity>
        </View>

        {/* Technical Backup Status Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerLeft}>
            <MaterialCommunityIcons name="usb-flash-drive-outline" size={22} color="#D97706" />
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTitle}>Physical Backup Recommended</Text>
              <Text style={styles.bannerSubtitle}>Last .vault export was 14 days ago.</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.bannerButton} 
            onPress={() => router.push('/settings' as any)}
          >
            <Text style={styles.bannerButtonText}>Export</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Transactions List */}
        <View style={styles.transactionsSection}>
          <View style={styles.transactionsHeaderRow}>
            <Text style={styles.sectionTitle}>Recent Archives</Text>
            <TouchableOpacity onPress={() => router.push('/history' as any)}>
              <Text style={styles.seeAllLink}>See All</Text>
            </TouchableOpacity>
          </View>

          {/* Transaction Item 1 */}
          <TouchableOpacity 
            style={styles.transactionCard}
            onPress={() => router.push({ pathname: '/transaction-detail', params: { id: '1', merchant: 'MicroCenter Depot', amount: '-$142.50', category: 'HARDWARE', confidence: '99.4%' } } as any)}
          >
            <View style={styles.transactionLeft}>
              <View style={styles.transactionIconBox}>
                <Ionicons name="hardware-chip-outline" size={18} color="#475569" />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.merchantName}>MicroCenter Depot</Text>
                <View style={styles.transactionMetaRow}>
                  <Text style={styles.transactionTime}>Today, 2:15 PM</Text>
                  <View style={styles.tagHardware}>
                    <Text style={styles.tagHardwareText}>HARDWARE [99.4%]</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.transactionAmount}>-$142.50</Text>
          </TouchableOpacity>

          {/* Transaction Item 2 */}
          <TouchableOpacity 
            style={styles.transactionCard}
            onPress={() => router.push({ pathname: '/transaction-detail', params: { id: '2', merchant: 'Nordic Roast Coffee Lab', amount: '-$6.80', category: 'DINING', confidence: '98.1%' } } as any)}
          >
            <View style={styles.transactionLeft}>
              <View style={styles.transactionIconBox}>
                <Ionicons name="cafe-outline" size={18} color="#475569" />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.merchantName}>Nordic Roast Coffee Lab</Text>
                <View style={styles.transactionMetaRow}>
                  <Text style={styles.transactionTime}>Yesterday</Text>
                  <View style={styles.tagDining}>
                    <Text style={styles.tagDiningText}>DINING [98.1%]</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.transactionAmount}>-$6.80</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { paddingHorizontal: 24, paddingVertical: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoIconBox: { width: 32, height: 32, borderRadius: 8, backgroundColor: '#10B981', alignItems: 'center', justifyContent: 'center', marginRight: 8 },
  logoText: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  badgeContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ECFDF5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999, borderWidth: 1, borderColor: '#A7F3D0' },
  badgeDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981', marginRight: 6 },
  badgeText: { fontSize: 11, fontWeight: '700', color: '#047857' },
  scrollView: { flex: 1 },
  scrollContent: { padding: 24, paddingBottom: 40 },
  heroCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, marginBottom: 20, borderWidth: 1, borderColor: '#F1F5F9', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
  heroSubtitle: { fontSize: 13, fontWeight: '500', color: '#64748B', marginBottom: 4 },
  heroAmount: { fontSize: 36, fontWeight: 'bold', color: '#0F172A', marginBottom: 16 },
  heroFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTopWidth: 1, borderTopColor: '#F8FAFC' },
  heroStatusRow: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  heroStatusText: { fontSize: 12, color: '#475569', marginLeft: 6, fontWeight: '500' },
  heroStatsLink: { fontSize: 12, fontWeight: '600', color: '#10B981' },
  actionGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, gap: 10 },
  primaryActionButton: { flex: 1, backgroundColor: '#059669', paddingVertical: 14, borderRadius: 12, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  primaryActionText: { color: '#ffffff', fontSize: 11, fontWeight: '600', marginTop: 4 },
  secondaryActionButton: { flex: 1, backgroundColor: '#FFFFFF', paddingVertical: 14, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: '#F1F5F9' },
  secondaryActionText: { color: '#334155', fontSize: 11, fontWeight: '600', marginTop: 4 },
  bannerContainer: { backgroundColor: '#FFFBEB', borderWidth: 1, borderColor: '#FDE68A', borderRadius: 12, padding: 14, marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  bannerLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 10 },
  bannerTextContainer: { marginLeft: 10, flex: 1 },
  bannerTitle: { fontSize: 12, fontWeight: '700', color: '#92400E' },
  bannerSubtitle: { fontSize: 11, color: '#B45309', marginTop: 1 },
  bannerButton: { backgroundColor: '#D97706', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  bannerButtonText: { color: '#ffffff', fontSize: 11, fontWeight: '600' },
  transactionsSection: { marginBottom: 20 },
  transactionsHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: '#1E293B' },
  seeAllLink: { fontSize: 12, fontWeight: '600', color: '#10B981' },
  transactionCard: { backgroundColor: '#FFFFFF', padding: 14, borderRadius: 12, borderWidth: 1, borderColor: '#F1F5F9', marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  transactionLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  transactionIconBox: { width: 38, height: 38, borderRadius: 8, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  transactionDetails: { flex: 1 },
  merchantName: { fontSize: 13, fontWeight: 'bold', color: '#1E293B' },
  transactionMetaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 3 },
  transactionTime: { fontSize: 11, color: '#94A3B8', marginRight: 8 },
  tagHardware: { backgroundColor: '#ECFDF5', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  tagHardwareText: { fontSize: 9, fontWeight: '600', color: '#047857' },
  tagDining: { backgroundColor: '#EFF6FF', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  tagDiningText: { fontSize: 9, fontWeight: '600', color: '#1D4ED8' },
  transactionAmount: { fontSize: 13, fontWeight: 'bold', color: '#0F172A' },
});