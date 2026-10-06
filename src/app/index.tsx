// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import {
//   Alert,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View
// } from 'react-native';

// export default function LoginScreen() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username.trim() === '' || password.trim() === '') {
//       Alert.alert('Masuk Gagal', 'Username dan Password tidak boleh kosong!');
//     } else {
//       Alert.alert('Selamat Datang!', `Siap untuk sprint 3 menit hari ini, ${username}?`);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar style="dark" />
      
//       {/* Header Section */}
//       <View style={styles.header}>
//         <View style={styles.badge}>
//           <Text style={styles.badgeText}>⚡ 3-MINUTE DAILY SKILLS</Text>
//         </View>
//         <Text style={styles.title}>MicroSprint</Text>
//         <Text style={styles.subtitle}>
//           Kuasai keahlian praktis baru setiap hari tanpa teori berbelit.
//         </Text>
//       </View>

//       {/* Card Form */}
//       <View style={styles.card}>
//         <Text style={styles.inputLabel}>USERNAME</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Masukkan username kamu"
//           placeholderTextColor="#a0aec0"
//           value={username}
//           onChangeText={setUsername}
//           autoCapitalize="none"
//         />

//         <Text style={styles.inputLabel}>PASSWORD</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Masukkan password"
//           placeholderTextColor="#a0aec0"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>MULAI SPRINT</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={styles.guestButton} 
//           onPress={() => Alert.alert('Mode Tamu', 'Mencoba sprint tanpa login...')}
//         >
//           <Text style={styles.guestText}>Coba Skill Hari Ini Tanpa Login</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Footer Info */}
//       <Text style={styles.footerText}>
//         🔥 Join 12,000+ learner streaks today
//       </Text>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f7fafc',
//     justifyContent: 'center',
//     paddingHorizontal: 24,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 32,
//   },
//   badge: {
//     backgroundColor: '#feebc8',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 20,
//     marginBottom: 12,
//   },
//   badgeText: {
//     color: '#c05621',
//     fontSize: 11,
//     fontWeight: '700',
//     letterSpacing: 0.8,
//   },
//   title: {
//     fontSize: 34,
//     fontWeight: '800',
//     color: '#1a202c',
//     letterSpacing: -0.5,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#718096',
//     textAlign: 'center',
//     marginTop: 8,
//     paddingHorizontal: 10,
//     lineHeight: 20,
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: 20,
//     padding: 24,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.06,
//     shadowRadius: 16,
//     elevation: 4,
//     borderWidth: 1,
//     borderColor: '#edf2f7',
//   },
//   inputLabel: {
//     fontSize: 11,
//     fontWeight: '700',
//     color: '#a0aec0',
//     letterSpacing: 1,
//     marginBottom: 6,
//   },
//   input: {
//     height: 50,
//     backgroundColor: '#f7fafc',
//     borderWidth: 1,
//     borderColor: '#e2e8f0',
//     borderRadius: 10,
//     paddingHorizontal: 14,
//     fontSize: 15,
//     color: '#2d3748',
//     marginBottom: 18,
//   },
//   button: {
//     backgroundColor: '#dd6b20', // Vibrant energy orange for micro-learning
//     height: 52,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 6,
//     shadowColor: '#dd6b20',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.25,
//     shadowRadius: 8,
//     elevation: 3,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 15,
//     fontWeight: '700',
//     letterSpacing: 1,
//   },
//   guestButton: {
//     marginTop: 16,
//     alignItems: 'center',
//   },
//   guestText: {
//     color: '#718096',
//     fontSize: 13,
//     fontWeight: '600',
//     textDecorationLine: 'underline',
//   },
//   footerText: {
//     textAlign: 'center',
//     marginTop: 32,
//     color: '#a0aec0',
//     fontSize: 13,
//     fontWeight: '500',
//   },
// });
import { Text, View } from 'react-native';
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold">Welcome to the MicroSprint App!</Text>
    </View>
  );
}