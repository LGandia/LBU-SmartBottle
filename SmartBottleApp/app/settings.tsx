import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function SettingsScreen() {
  const isDark = useColorScheme() === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#000" : "#fff" }]}>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>Settings</Text>
      <Text style={{ color: isDark ? "#ccc" : "#333" }}>
        Configure your preferences here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});