1. Identity: 

   Name: Ivander Agung Saptono

   NIM: 2802402155

3. Theme: Finance

4. Screenshot:
   <img width="1700" height="1022" alt="image" src="https://github.com/user-attachments/assets/766e075f-e478-4a38-b8fe-a756606438b1" />
   <img width="1681" height="1016" alt="image" src="https://github.com/user-attachments/assets/fd79c102-5613-4d5f-a542-3cc6daddd34b" />
   <img width="1686" height="1018" alt="image" src="https://github.com/user-attachments/assets/aec255f7-9ce8-4477-b80b-d11ed86b72c5" />
   <img width="1680" height="1020" alt="image" src="https://github.com/user-attachments/assets/05307bee-9763-4885-8ed9-0b5f0d4cdc92" />
   <img width="1686" height="1016" alt="image" src="https://github.com/user-attachments/assets/f9eef898-ff8e-4d9a-8022-ca2f26e4586f" />
   <img width="1677" height="1022" alt="image" src="https://github.com/user-attachments/assets/7417cbf3-a1e1-44e0-99dc-958a12af5ab5" />

5.  Installation & How to Run
   Prerequisites
   -    Node.js: v18.0.0 or higher
   -    Mobile Client: Physical Android/iOS device running Expo Go, or an Android Studio Emulator / iOS Simulator.

   - Step-by-Step Instructions
     1. Clone the repository
     2. Install project dependencies:
     3. Start the Expo development server:
     4. Launch on Device: Scan the displayed terminal QR code using Expo Go (Android) or the native Camera app (iOS).

Concept Explanation:

6. How React Native works, 3 advantages of hybrid apps, and components, props, state, and navigation, with the example of our own code
   -    How React Native works
         React Native works under the hood by executing JavaScript code in a dedicated runtime engine and translating your React components into actual native platform widgets (like UIViews on iOS and android.views on Android). Unlike web-wrapper frameworks, it does not run inside a browser WebView.
                
   -    3 Advantages of hybrid apps
         1. Single Codebase for Multiple Platforms: Developers write the code once using web technologies like HTML, CSS, and JavaScript, and it runs smoothly across both iOS and Android (and other platforms). This eliminates the need to build and maintain separate, platform-specific codebases.
         2. Lower Development and Maintenance Costs: Because a single development team can build, update, and fix bugs for all platforms simultaneously, overall project costs and required resources drop significantly compared to native development.
         3. Faster Time-to-Market: Reusing a large portion of the same code speeds up the initial development and launch process, allowing businesses to release their product to multiple app stores much quicker.

- Components

Components are the fundamental, reusable building blocks of a React Native user interface. They can be built using core native elements like View, Text, TouchableOpacity, or Image.

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Custom reusable card component
export const TransactionCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.detailsRow}>
        <Text style={styles.merchantTitle}>Supermarket Supplies</Text>
        <Text style={styles.amountText}>-£45.20</Text>
      </View>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginVertical: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  merchantTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#DC2626',
  },
  actionButton: {
    backgroundColor: '#10B981',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
});


- Props (Properties)

Props allow components to receive dynamic input data from parent components, making UI components configurable and versatile.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the interface for the component props
interface StatusBadgeProps {
  label: string;
  isEncrypted: boolean;
  categoryCode?: string;
}

// Custom component accepting props
export const StatusBadge = ({ label, isEncrypted, categoryCode = 'GEN' }: StatusBadgeProps) => {
  return (
    <View style={[styles.badge, isEncrypted ? styles.encryptedBg : styles.standardBg]}>
      <Text style={[styles.badgeText, isEncrypted ? styles.encryptedText : styles.standardText]}>
        {label.toUpperCase()} [{categoryCode}]
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  encryptedBg: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  standardBg: {
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  encryptedText: {
    color: '#047857',
  },
  standardText: {
    color: '#475569',
  },
});


- State (useState)

State is internal memory managed within a component. Updating a component's state causes React Native to re-render the UI automatically to display current data.

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const BudgetCalculator = () => {
  // Local component states
  const [budgetLimit, setBudgetLimit] = useState<number>(500);
  const [inputVal, setInputVal] = useState<string>('');

  const handleUpdateLimit = () => {
    const numericVal = parseFloat(inputVal);
    if (!isNaN(numericVal) && numericVal > 0) {
      setBudgetLimit(numericVal);
      setInputVal('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Monthly Limit: £{budgetLimit.toFixed(2)}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter new budget limit"
        placeholderTextColor="#94A3B8"
        keyboardType="numeric"
        value={inputVal}
        onChangeText={setInputVal}
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdateLimit}>
        <Text style={styles.buttonText}>Set New Limit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    marginBottom: 12,
    color: '#0F172A',
  },
  button: {
    backgroundColor: '#059669',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});


- Navigation (Expo Router)

Expo Router manages file-based and programmatically driven navigation across screens while allowing route parameters to be passed dynamically.

Screen A: Navigating and Passing Parameters (useRouter)

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export const OverviewScreen = () => {
  const router = useRouter();

  const handleOpenReceipt = (receiptId: string) => {
    // Navigate imperatively to dynamic route with parameters
    router.push({
      pathname: '/ledger/[id]',
      params: { 
        id: receiptId, 
        merchant: 'Hardware Store Ltd', 
        amount: '124.50' 
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Receipts</Text>
      <TouchableOpacity 
        style={styles.itemCard}
        onPress={() => handleOpenReceipt('REC-9942')}
      >
        <Text style={styles.itemText}>Receipt #REC-9942</Text>
        <Text style={styles.linkText}>View Details →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8FAFC' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  itemCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: { fontSize: 14, fontWeight: '600', color: '#1E293B' },
  linkText: { fontSize: 14, color: '#10B981', fontWeight: 'bold' },
});

Screen B: Reading Parameters (useLocalSearchParams)

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ReceiptDetailScreen() {
  const router = useRouter();
  // Read parameters passed during navigation
  const { id, merchant, amount } = useLocalSearchParams<{ id: string; merchant: string; amount: string }>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Text style={styles.backBtnText}>← Go Back</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.header}>Receipt Reference: #{id}</Text>
        <Text style={styles.detail}>Merchant: {merchant}</Text>
        <Text style={styles.amount}>Total Paid: £{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8FAFC' },
  backBtn: { marginBottom: 20 },
  backBtnText: { color: '#10B981', fontWeight: 'bold', fontSize: 14 },
  card: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 16 },
  header: { fontSize: 14, color: '#64748B', marginBottom: 8 },
  detail: { fontSize: 18, fontWeight: 'bold', color: '#0F172A', marginBottom: 4 },
  amount: { fontSize: 22, fontWeight: 'bold', color: '#059669', marginTop: 12 },
});


7. Requirement Analysis: Problem Statement, Target User, minimum 5 User Needs, Mapping of User Requirements to Screens and Components, Design Decisions and Rationale, Development Plan

- Problem Statement: Current financial mobile apps heavily rely on cloud servers and mandatory bank integrations, creating privacy risks and vulnerability to data breaches. Additionally, offline environments—such as live community operational tracking or remote cash-based management—suffer from slow or unreliable server synchronization. Users require a privacy-first, zero-sync receipt archiver that operates entirely on local device storage.

- Target Users

  1. Privacy-conscious individuals who refuse to transmit sensitive financial records to third-party cloud servers.

  2. Community event organizers and field operational volunteers managing instant, on-the-ground cash expenses without network connectivity.

- Minimum 5 User Requirements

1. On-Device Receipt Scan: Capture physical receipts and extract financial data locally without issuing external network requests.

2. Interactive Data Correction: Manually inspect and edit extracted merchant details, total amounts, and dates prior to saving.

3. Local Ledger Persistence: Store and query financial archives instantly using an on-device database.

4. User Authentication and Account Reset: Secure local application access with user credential verification (e.g. PIN or local credentials) and provide local state reset capabilities.

5. Physical Data Portability: Export compressed ledger data and CSV reports directly to local device storage or physical USB OTG media without cloud dependency.

- Mapping of User Requirements to Screens and Components

| User Requirement | App Screen | UI Component / Logic |

| :--- | :--- | :--- |

| 1. On-Device Receipt Scan | capture.tsx | CameraView scanner, viewfinder frame, shutter button |

| 2. Interactive Data Correction | verify.tsx / modal | Manual entry modal, text input fields, validation handlers |

| 3. Local Ledger Persistence | history.tsx | FlatList ledger, search filter bar, TransactionCard |

| 4. Local Authentication & Reset | index.tsx / settings.tsx | PIN entry pad, auth switcher, Account Reset button |

| 5. Physical Data Portability | export.tsx / settings.tsx | Export CSV button, Vault backup trigger, local file writer |

- Design Decisions and Rationale

  1. Zero-Cloud Architecture: Eliminates server infrastructure to guarantee total privacy and eliminate latency during offline field operations.

  2. Light-Mode Utilitarian UI: Features structured card elements, clear numeric data displays, and explicit status badges (such as "100% LOCAL") to reinforce transparency and data control.
 
-  Development Plan

    1. Phase 1 - Architecture Setup: Finalize Expo Router tab navigation, directory structures (src/app/ and src/core/), and global layout providers.
 
    2. Phase 2 - Core Persistence Layer: Establish local storage schemas and CRUD utility routines to read and write ledger data offline.
 
    3. Phase 3 - Capture & Fallback Engine: Integrate camera permissions, viewfinder layouts, and interactive correction modals.
 
    4. Phase 4 - Analytics & Portability: Build local financial calculation utilities, data chart components, and local file export triggers for CSV generation.
 
    5. Phase 5 - Audit & Hardening: Conduct local data wipe tests, verify offline storage integrity, and assemble final submission documentation.
 
- Video Demo Link: https://drive.google.com/file/d/1aHkerBS8IU4leGa35WTV7pr7npkwwkhs/view?usp=sharing
