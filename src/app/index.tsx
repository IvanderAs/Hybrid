import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function QuickLogScreen() {
  const [amount, setAmount] = useState('48.50');
  const [merchant, setMerchant] = useState('Organic Market');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [paymentMethod, setPaymentMethod] = useState<'Cash' | 'Card' | 'Vault Bank'>('Cash');
  const [tags, setTags] = useState([
    { id: '1', label: '#food', selected: true },
    { id: '2', label: '#groceries', selected: true },
    { id: '3', label: '#fuel', selected: false },
    { id: '4', label: '#bills', selected: false },
    { id: '5', label: '#tax-deductible', selected: false, isTax: true },
    { id: '6', label: '#transit', selected: false },
    { id: '7', label: '#hardware', selected: false },
  ]);

  // Keypad press handler
  const handleKeypress = (key: string) => {
    if (key === 'backspace') {
      setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    } else if (key === '.') {
      if (!amount.includes('.')) {
        setAmount((prev) => prev + '.');
      }
    } else {
      if (amount === '0' || amount === '0.00') {
        setAmount(key);
      } else if (amount.length < 9) {
        setAmount((prev) => prev + key);
      }
    }
  };

  // Toggle Tag Selection
  const toggleTag = (id: string) => {
    setTags((prev) =>
      prev.map((t) => (t.id === id ? { ...t, selected: !t.selected } : t))
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <StatusBar barStyle="light-content" backgroundColor="#0d141a" />

      {/* Header Bar */}
      <View className="h-16 px-4 flex-row items-center justify-between border-b border-surface-container-high bg-surface">
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="w-11 h-11 items-center justify-center rounded-lg">
            <MaterialIcons name="arrow-back" size={24} color="#dce3ec" />
          </TouchableOpacity>
          <Text className="text-on-surface text-xl font-bold">Quick Log</Text>
        </View>

        <View className="w-8 h-8 rounded-full bg-primary items-center justify-center">
          <MaterialIcons name="person" size={18} color="#003824" />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}>
        {/* Dynamic Status & Action Bar */}
        <View className="flex-row items-center justify-between py-3">
          <TouchableOpacity className="px-3 py-1.5 rounded-lg">
            <Text className="text-on-surface-variant font-medium">Cancel</Text>
          </TouchableOpacity>

          {/* Air-Gapped Status Indicator */}
          <View className="flex-row items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-surface-container-high">
            <View className="w-2 h-2 rounded-full bg-primary" />
            <Text className="text-[11px] text-on-surface-variant font-semibold uppercase tracking-wider">
              AIR-GAPPED ENGINE
            </Text>
          </View>

          {/* Save Button */}
          <TouchableOpacity className="px-4 py-1.5 rounded-full bg-primary flex-row items-center gap-1">
            <Text className="text-on-primary font-bold text-sm">Save</Text>
            <Text className="text-[12px] text-on-primary/80">0.02s</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Numeric Display */}
        <View className="items-center justify-center my-2 p-4 rounded-xl bg-surface-container-low border border-surface-container-high">
          {/* Currency Switcher */}
          <View className="flex-row items-center gap-2 mb-3">
            {['USD', 'EUR', 'GBP'].map((curr) => (
              <TouchableOpacity
                key={curr}
                onPress={() => setSelectedCurrency(curr)}
                className={`px-3 py-1 rounded-full ${
                  selectedCurrency === curr
                    ? 'bg-primary-container'
                    : 'bg-surface-container-highest'
                }`}
              >
                <Text
                  className={`text-[11px] font-bold ${
                    selectedCurrency === curr
                      ? 'text-on-primary-container'
                      : 'text-on-surface-variant'
                  }`}
                >
                  {curr === 'USD' ? '$ USD' : curr === 'EUR' ? '€ EUR' : '£ GBP'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Amount Display */}
          <View className="flex-row items-baseline justify-center">
            <Text className="text-2xl text-on-surface-variant opacity-80 mr-1 font-semibold">
              {selectedCurrency === 'USD' ? '$' : selectedCurrency === 'EUR' ? '€' : '£'}
            </Text>
            <Text className="text-4xl text-primary font-bold">{amount}</Text>
          </View>

          {/* Bare-metal status */}
          <View className="mt-2 flex-row items-center gap-1">
            <MaterialIcons name="verified-user" size={13} color="#4edea3" />
            <Text className="text-[11px] text-on-surface-variant/80">
              Calculated on bare-metal coprocessor
            </Text>
          </View>
        </View>

        {/* Merchant & Quick Note Field */}
        <View className="mb-3 p-3 rounded-xl bg-surface-container-low flex-row items-center gap-3">
          <View className="w-8 h-8 rounded-lg bg-surface-container-highest items-center justify-center">
            <MaterialIcons name="storefront" size={20} color="#bbcabf" />
          </View>
          <TextInput
            className="flex-1 text-on-surface text-sm p-0"
            placeholder="Merchant or note (optional)"
            placeholderTextColor="#86948a"
            value={merchant}
            onChangeText={setMerchant}
          />
          {merchant.length > 0 && (
            <TouchableOpacity onPress={() => setMerchant('')}>
              <MaterialIcons name="close" size={18} color="#bbcabf" />
            </TouchableOpacity>
          )}
        </View>

        {/* One-Tap Preset Quick Tags */}
        <View className="mb-3">
          <View className="flex-row justify-between mb-2 px-1">
            <Text className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
              Allocations & Tax
            </Text>
            <Text className="text-[11px] font-semibold text-primary">
              {tags.filter((t) => t.selected).length} Applied
            </Text>
          </View>

          <View className="flex-row flex-wrap gap-2">
            {tags.map((t) => (
              <TouchableOpacity
                key={t.id}
                onPress={() => toggleTag(t.id)}
                className={`px-3 py-1.5 rounded-full flex-row items-center gap-1 ${
                  t.selected
                    ? 'bg-primary-container'
                    : 'bg-surface-container-highest'
                }`}
              >
                <Text
                  className={`text-xs font-semibold ${
                    t.selected
                      ? 'text-on-primary-container'
                      : t.isTax
                      ? 'text-tertiary-fixed-dim'
                      : 'text-on-surface-variant'
                  }`}
                >
                  {t.label}
                </Text>
                {t.selected && (
                  <MaterialIcons name="check" size={14} color="#00422b" />
                )}
              </TouchableOpacity>
            ))}

            <TouchableOpacity className="px-3 py-1.5 rounded-full bg-surface-container-low flex-row items-center gap-0.5 border border-surface-container-high">
              <MaterialIcons name="add" size={15} color="#bbcabf" />
              <Text className="text-xs text-on-surface-variant font-medium">
                Tag
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Payment Method Selector */}
        <View className="mb-3 flex-row p-1 rounded-xl bg-surface-container-low">
          {[
            { id: 'Cash', label: '💵 Cash' },
            { id: 'Card', label: '💳 Card' },
            { id: 'Vault Bank', label: '🏦 Vault Bank' },
          ].map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setPaymentMethod(item.id as any)}
              className={`flex-1 py-2 items-center justify-center rounded-lg ${
                paymentMethod === item.id
                  ? 'bg-surface-container-highest'
                  : 'bg-transparent'
              }`}
            >
              <Text
                className={`text-xs font-bold ${
                  paymentMethod === item.id ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Camera Receipt Attachment Strip */}
        <View className="mb-3 p-3 rounded-xl bg-surface-container-low flex-row items-center justify-between">
          <View className="flex-row items-center gap-3 flex-1 mr-2">
            <View className="w-11 h-11 rounded-lg overflow-hidden bg-surface-container-highest">
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD142rp6-fj-iA205XPRuWXzxzKN8NU25Tmj13QAN5RYgItfG8Ydoa9aOtuUHTGK_dFNeLuTgIx8huwW2ZpTRTDimoM6mAFeE1StCE8ZFuDzF-nbEGl5dA1eyzlN_1Ys9lc5nsjTFdR96GETZz9c7ui82Aeg5KbcdukLoccticj_48rOeTbZIlH1GHJMHpQLyuznMnsBlH51siwutwI3h_uoFL5ft_279-qMVQszlfTPlqMvJqNzNqn9A',
                }}
                className="w-full h-full object-cover"
              />
              <View className="absolute bottom-0 inset-x-0 bg-surface-container-lowest/80 items-center">
                <Text className="text-[9px] text-primary font-bold">JPG</Text>
              </View>
            </View>

            <View className="flex-1">
              <View className="flex-row items-center gap-1">
                <Text
                  className="text-xs text-on-surface font-medium"
                  numberOfLines={1}
                >
                  IMG_202505_receipt.jpg
                </Text>
                <MaterialIcons name="lock" size={12} color="#4edea3" />
              </View>
              <Text className="text-[11px] text-on-surface-variant">
                185 KB • -88% local opt
              </Text>
            </View>
          </View>

          <View className="flex-row gap-1">
            <TouchableOpacity className="w-8 h-8 rounded-lg bg-surface-container-highest items-center justify-center">
              <MaterialIcons name="photo-camera" size={18} color="#bbcabf" />
            </TouchableOpacity>
            <TouchableOpacity className="w-8 h-8 rounded-lg bg-surface-container-highest items-center justify-center">
              <MaterialIcons name="delete" size={18} color="#ffb4ab" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Keypad */}
        <View className="flex-row flex-wrap justify-between gap-y-2 mb-4">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'backspace'].map(
            (key) => (
              <TouchableOpacity
                key={key}
                onPress={() => handleKeypress(key)}
                className="w-[31%] h-12 rounded-xl bg-surface-container-low items-center justify-center active:bg-surface-container-highest"
              >
                {key === 'backspace' ? (
                  <MaterialIcons name="backspace" size={22} color="#ffb95f" />
                ) : (
                  <Text className="text-lg text-on-surface font-semibold">
                    {key}
                  </Text>
                )}
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Main Instant Commit Action */}
        <TouchableOpacity className="w-full py-3.5 rounded-xl bg-primary items-center justify-center">
          <View className="flex-row items-center gap-1.5">
            <Ionicons name="flash" size={18} color="#003824" />
            <Text className="text-on-primary font-bold text-base">
              Save to Local Disk (Instant)
            </Text>
          </View>
          <Text className="text-[11px] text-on-primary/80 mt-0.5">
            No cloud sync • 100% private to this device
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}