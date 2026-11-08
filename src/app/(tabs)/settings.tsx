import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();
  
  const [username, setUsername] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [saveMessage, setSaveMessage] = useState('');

  // Load saved profile on mount & when Expo reloads
  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      const storedName = await AsyncStorage.getItem('vault_username');
      if (storedName) {
        setUsername(storedName);
      } else {
        setUsername('Vault User'); // Default fallback if no name was set
      }
    } catch (e) {
      console.error('Failed to load profile username', e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveUsername = async () => {
    if (!username.trim()) {
      Alert.alert('Error', 'Username cannot be empty.');
      return;
    }

    try {
      await AsyncStorage.setItem('vault_username', username.trim());
      setIsEditing(false);
      setSaveMessage('Profile updated successfully!');
      setTimeout(() => setSaveMessage(''), 2500);
    } catch (e) {
      Alert.alert('Error', 'Failed to save username.');
    }
  };

  const handleResetAccount = async () => {
    Alert.alert(
      'Reset Vault Account',
      'Are you sure you want to reset your account? This will wipe your local profile, PIN, and stored transactions.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Reset Everything', 
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.clear();
              router.replace('/');
            } catch (e) {
              console.error('Failed to clear storage', e);
            }
          }
        }
      ]
    );
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#10B981" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>User Profile</Text>
      </View>

      <View style={styles.content}>
        
        {/* Avatar Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={48} color="#FFFFFF" />
          </View>
          <Text style={styles.avatarName}>{username}</Text>
          <View style={styles.offlineBadge}>
            <View style={styles.greenDot} />
            <Text style={styles.offlineBadgeText}>LOCAL ACCOUNT</Text>
          </View>
        </View>

        {/* Profile Details Form */}
        <View style={styles.formCard}>
          <Text style={styles.cardSectionTitle}>Account Settings</Text>

          {saveMessage ? (
            <View style={styles.successNotice}>
              <Ionicons name="checkmark-circle-outline" size={16} color="#047857" />
              <Text style={styles.successNoticeText}>{saveMessage}</Text>
            </View>
          ) : null}

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Display Username</Text>
            <View style={styles.inputShell}>
              <Ionicons name="person-outline" size={18} color="#64748B" />
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                editable={isEditing}
                placeholder="Enter username"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          {isEditing ? (
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveUsername}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
              <Text style={styles.editButtonText}>Edit Username</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Danger Zone / Reset */}
        <View style={[styles.formCard, styles.dangerCard]}>
          <Text style={styles.dangerTitle}>Security & Reset</Text>
          <Text style={styles.dangerDesc}>
            Wipe all local data, PIN, and stored transactions from this device.
          </Text>

          <TouchableOpacity style={styles.resetButton} onPress={handleResetAccount}>
            <Ionicons name="trash-outline" size={18} color="#EF4444" style={{ marginRight: 8 }} />
            <Text style={styles.resetButtonText}>Reset Local Account</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  center: { justifyContent: 'center', alignItems: 'center' },
  header: { 
    paddingHorizontal: 24, 
    paddingVertical: 16, 
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1, 
    borderBottomColor: '#F1F5F9' 
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1E293B' },
  content: { padding: 24, gap: 16 },
  profileCard: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 20, 
    padding: 24, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#E2E8F0',
    elevation: 2 
  },
  avatarCircle: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    backgroundColor: '#10B981', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 12 
  },
  avatarName: { fontSize: 22, fontWeight: 'bold', color: '#1E293B', marginBottom: 6 },
  offlineBadge: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#ECFDF5', 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#A7F3D0'
  },
  greenDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#10B981', marginRight: 6 },
  offlineBadgeText: { fontSize: 10, fontWeight: 'bold', color: '#047857', letterSpacing: 0.5 },
  formCard: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 16, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: '#E2E8F0' 
  },
  cardSectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E293B', marginBottom: 16 },
  inputGroup: { marginBottom: 16 },
  label: { fontSize: 12, fontWeight: '600', color: '#475569', marginBottom: 6 },
  inputShell: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F8FAFC', 
    borderWidth: 1, 
    borderColor: '#E2E8F0', 
    borderRadius: 12, 
    paddingHorizontal: 14 
  },
  input: { flex: 1, paddingVertical: 12, fontSize: 15, color: '#1E293B', marginLeft: 8 },
  editButton: { 
    backgroundColor: '#F1F5F9', 
    paddingVertical: 12, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  editButtonText: { color: '#475569', fontSize: 14, fontWeight: '600' },
  saveButton: { 
    backgroundColor: '#10B981', 
    paddingVertical: 12, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  saveButtonText: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
  successNotice: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#ECFDF5', 
    padding: 10, 
    borderRadius: 8, 
    marginBottom: 14 
  },
  successNoticeText: { color: '#047857', fontSize: 12, marginLeft: 6, fontWeight: '500' },
  dangerCard: { borderColor: '#FEE2E2', backgroundColor: '#FEF2F2' },
  dangerTitle: { fontSize: 15, fontWeight: 'bold', color: '#991B1B', marginBottom: 4 },
  dangerDesc: { fontSize: 12, color: '#B91C1C', marginBottom: 16 },
  resetButton: { 
    flexDirection: 'row', 
    backgroundColor: '#FFFFFF', 
    borderWidth: 1, 
    borderColor: '#FECACA', 
    paddingVertical: 12, 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  resetButtonText: { color: '#EF4444', fontSize: 14, fontWeight: 'bold' }
});