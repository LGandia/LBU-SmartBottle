import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function OverviewTab() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#000" : "#fff" }]}>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>Overview</Text>
      <Text style={{ color: isDark ? "#ccc" : "#333" }}>
        Summary of your hydration and activity stats.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});