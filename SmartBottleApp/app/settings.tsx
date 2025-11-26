import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [largeFont, setLargeFont] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accessibility Settings</Text>

      <View style={styles.option}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.option}>
        <Text style={styles.label}>Dyslexic-Friendly Font</Text>
        <Switch value={dyslexicFont} onValueChange={setDyslexicFont} />
      </View>

      <View style={styles.option}>
        <Text style={styles.label}>Large Font Size</Text>
        <Switch value={largeFont} onValueChange={setLargeFont} />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save Preferences</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  option: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  label: { fontSize: 18 },
  saveButton: { marginTop: 30, backgroundColor: '#007AFF', padding: 15, borderRadius: 8 },
  saveText: { color: '#fff', textAlign: 'center', fontSize: 16 }
});