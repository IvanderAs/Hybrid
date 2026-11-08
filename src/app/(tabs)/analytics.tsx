import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AnalyticsScreen() {
  // Category breakdown matching exact Ledger data ($290.29 total)
  const categoryData = [
    { name: 'Hardware & Gear', percentage: 48.9, amount: '$142.00', color: '#10B981' },
    { name: 'Office Supplies', percentage: 31.0, amount: '$89.99', color: '#8B5CF6' },
    { name: 'Logistics & Fuel', percentage: 15.8, amount: '$45.80', color: '#3B82F6' },
    { name: 'Dining & Coffee', percentage: 4.3, amount: '$12.50', color: '#F59E0B' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Spending Analytics</Text>
          <Text style={styles.headerSubtitle}>Local On-Device Insights</Text>
        </View>

        {/* Top Summary Card - Aligned with Dashboard Total */}
        <View style={styles.summaryCard}>
          <Text style={styles.cardLabel}>THIS WEEK TOTAL (DUMMY)</Text>
          <Text style={styles.amountText}>$290.29</Text>
          <View style={styles.trendRow}>
            <Ionicons name="trending-down" size={16} color="#10B981" />
            <Text style={styles.trendText}>12% lower than last week</Text>
          </View>
        </View>

        {/* Category Breakdown */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Category Breakdown</Text>
          {categoryData.map((item, index) => (
            <View key={index} style={styles.categoryRow}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryName}>{item.name}</Text>
                <Text style={styles.categoryAmount}>{item.amount}</Text>
              </View>
              <View style={styles.barBackground}>
                <View 
                  style={[
                    styles.barFill, 
                    { width: `${item.percentage}%`, backgroundColor: item.color }
                  ]} 
                />
              </View>
            </View>
          ))}
        </View>

        {/* Quick Metrics Grid - Aligned with Ledger Totals */}
        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <Ionicons name="card-outline" size={24} color="#10B981" style={{ marginBottom: 8 }} />
            <Text style={styles.metricValue}>$72.57</Text>
            <Text style={styles.metricLabel}>Daily Average</Text>
          </View>

          <View style={styles.metricCard}>
            <Ionicons name="receipt-outline" size={24} color="#3B82F6" style={{ marginBottom: 8 }} />
            <Text style={styles.metricValue}>4</Text>
            <Text style={styles.metricLabel}>Total Receipts</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  scrollContent: { padding: 24, paddingBottom: 40 },
  header: { marginBottom: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1E293B' },
  headerSubtitle: { fontSize: 13, color: '#64748B', marginTop: 2 },
  summaryCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: '#E2E8F0', marginBottom: 16, alignItems: 'center' },
  cardLabel: { fontSize: 11, fontWeight: 'bold', color: '#64748B', letterSpacing: 1, marginBottom: 4 },
  amountText: { fontSize: 36, fontWeight: 'bold', color: '#1E293B', marginBottom: 6 },
  trendRow: { flexDirection: 'row', alignItems: 'center' },
  trendText: { fontSize: 12, color: '#10B981', fontWeight: '600', marginLeft: 4 },
  sectionCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: '#E2E8F0', marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E293B', marginBottom: 16 },
  categoryRow: { marginBottom: 14 },
  categoryHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  categoryName: { fontSize: 13, fontWeight: '600', color: '#334155' },
  categoryAmount: { fontSize: 13, fontWeight: 'bold', color: '#1E293B' },
  barBackground: { height: 8, backgroundColor: '#F1F5F9', borderRadius: 4, overflow: 'hidden' },
  barFill: { height: '100%', borderRadius: 4 },
  metricsGrid: { flexDirection: 'row', gap: 12 },
  metricCard: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#E2E8F0', alignItems: 'center' },
  metricValue: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  metricLabel: { fontSize: 12, color: '#64748B', marginTop: 2 }
});