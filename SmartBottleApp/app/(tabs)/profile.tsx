import React, { useState } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  useColorScheme,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useRouter, Link } from 'expo-router';

// Define a TypeScript interface for the profile payload
interface UserProfile {
  name: string;
  description: string;
  gender: string;
  dob: string;
  height: string;
  weight: string;
}

export default function ProfileTab() {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [gender, setGender] = useState<string>('Male');
  const [dob, setDob] = useState<Date>(new Date(2000, 0, 1)); // default DOB
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const router = useRouter();

  // Calculate age from DOB
  const calculateAge = (date: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
      age--;
    }
    return age;
  };

  // Format DOB in European format (DD/MM/YYYY)
  const formattedDob: string = `${dob.getDate().toString().padStart(2, '0')}/${(dob.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${dob.getFullYear()}`;

  const handleSave = async () => {
    if (!name || !height || !weight) {
      Alert.alert('Please fill in all required fields.');
      return;
    }

    const payload: UserProfile = {
      name,
      description,
      gender,
      dob: formattedDob,
      height,
      weight,
    };

    try {
      const response = await fetch('http://192.168.0.201:5000/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('Profile update response:', result);
      Alert.alert(result.message || 'Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      Alert.alert('Failed to update profile. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={styles.profilePic}
      />

      {/* Name */}
      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Name</Text>
      <TextInput
        style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
        value={name}
        onChangeText={setName}
        placeholder="Enter your full name"
        placeholderTextColor={isDark ? '#aaa' : '#555'}
      />

      {/* Description */}
      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Description</Text>
      <TextInput
        style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
        value={description}
        onChangeText={setDescription}
        placeholder="Short bio or tagline"
        placeholderTextColor={isDark ? '#aaa' : '#555'}
      />

      {/* Gender Dropdown */}
      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Gender</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={{ color: isDark ? '#fff' : '#000' }}
          dropdownIconColor={isDark ? '#fff' : '#000'}
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
          <Picker.Item label="Prefer not to say" value="Prefer not to say" />
        </Picker>
      </View>

      {/* Date of Birth + Age */}
      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Date of Birth</Text>
      <TextInput
        style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
        value={`${formattedDob} (Age: ${calculateAge(dob)} years)`}
        placeholder="DD/MM/YYYY"
        placeholderTextColor={isDark ? '#aaa' : '#555'}
        onFocus={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event: DateTimePickerEvent, selectedDate?: Date) => {
            setShowDatePicker(false);
            if (selectedDate) setDob(selectedDate);
          }}
        />
      )}

      {/* Height */}
      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Height (cm)</Text>
      <TextInput
        style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
        value={height}
        onChangeText={setHeight}
        placeholder="Enter your height in cm"
        keyboardType="numeric"
        placeholderTextColor={isDark ? '#aaa' : '#555'}
      />

      {/* Weight */}
      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Weight (kg)</Text>
      <TextInput
        style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
        value={weight}
        onChangeText={setWeight}
        placeholder="Enter your weight in kg"
        keyboardType="numeric"
        placeholderTextColor={isDark ? '#aaa' : '#555'}
      />

      {/* Save Button */}
      <Button title="Save Profile" onPress={handleSave} />

      {/* Navigation Buttons (type-safe with Link) */}
      <View style={{ marginTop: 20 }}>
        <Link href="/settings" asChild>
          <Button title="Accessibility Settings" />
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
  profilePic: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  label: { alignSelf: 'flex-start', marginLeft: '5%', marginBottom: 5, fontSize: 14 },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  pickerWrapper: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 15,
  },
});