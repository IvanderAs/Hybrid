import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#F1F5F9',
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
          // Ensures floating elements aren't clipped by the tab bar frame
          overflow: 'visible', 
        },
        tabBarActiveTintColor: '#10B981',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shield-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'Ledger',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Central Floating Scan Button / Capture Tab */}
      <Tabs.Screen
        name="capture"
        options={{
          title: 'Scan',
          tabBarIcon: () => (
            <View style={{
              position: 'absolute',
              top: -22, // Floats cleanly above the tab bar header line
              width: 54,
              height: 54,
              borderRadius: 27,
              backgroundColor: '#10B981',
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#10B981',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.4,
              shadowRadius: 6,
              elevation: 8,
              borderWidth: 3,
              borderColor: '#FFFFFF',
            }}>
              <Ionicons name="camera" size={26} color="#FFFFFF" />
            </View>
          ),
          tabBarLabelStyle: {
            marginTop: 4, // Leaves comfortable padding below the elevated button
            color: '#10B981',
            fontWeight: 'bold',
            fontSize: 11,
          },
        }}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Security',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="key-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Hidden Tab Screen for Transaction Details */}
      <Tabs.Screen
        name="transaction-detail"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}