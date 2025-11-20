import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  useColorScheme,
} from 'react-native';

export default function ProfileTab() {
  const [name, setName] = useState("John Doe");
  const [description, setDescription] = useState("SmartBottle user");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("25");
  const [height, setHeight] = useState("175"); // cm
  const [weight, setWeight] = useState("70");  // kg

  // Detect system theme (light or dark)
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const handleSave = () => {
    console.log("Profile saved:", { name, description, gender, age, height, weight });
    alert("Profile updated!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{ uri: "https://via.placeholder.com/100" }}
        style={styles.profilePic}
      />

      {/* Name & Description */}
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>{name}</Text>
      <Text style={[styles.subtitle, { color: isDark ? "#ccc" : "gray" }]}>{description}</Text>

      {/* Editable Fields */}
      <TextInput
        style={[styles.input, { color: isDark ? "#fff" : "#000" }]}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor={isDark ? "#aaa" : "#555"}
      />
      <TextInput
        style={[styles.input, { color: isDark ? "#fff" : "#000" }]}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        placeholderTextColor={isDark ? "#aaa" : "#555"}
      />
      <TextInput
        style={[styles.input, { color: isDark ? "#fff" : "#000" }]}
        value={gender}
        onChangeText={setGender}
        placeholder="Gender"
        placeholderTextColor={isDark ? "#aaa" : "#555"}
      />
      <TextInput
        style={[styles.input, { color: isDark ? "#fff" : "#000" }]}
        value={age}
        onChangeText={setAge}
        placeholder="Age"
        keyboardType="numeric"
        placeholderTextColor={isDark ? "#aaa" : "#555"}
      />
      <TextInput
        style={[styles.input, { color: isDark ? "#fff" : "#000" }]}
        value={height}
        onChangeText={setHeight}
        placeholder="Height (cm)"
        keyboardType="numeric"
        placeholderTextColor={isDark ? "#aaa" : "#555"}
      />
      <TextInput
        style={[styles.input, { color: isDark ? "#fff" : "#000" }]}
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        placeholderTextColor={isDark ? "#aaa" : "#555"}
      />

      {/* Save Button */}
      <Button title="Save Profile" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20 },
  profilePic: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { fontSize: 16, marginBottom: 20 },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});