import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function StatisticsScreen() {
  const [dateRange, setDateRange] = useState("today");
  const isDark = useColorScheme() === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#000" : "#fff" }]}>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
        Smart Water Bottle Stats
      </Text>

      <RNPickerSelect
        onValueChange={(value) => setDateRange(value)}
        items={[
          { label: "Today", value: "today" },
          { label: "This Week", value: "week" },
          { label: "This Month", value: "month" },
          { label: "Custom Range", value: "custom" },
        ]}
        placeholder={{
          label: "Select range",
          value: null,
          color: isDark ? "#aaa" : "#555",
        }}
        style={{
          inputIOS: { color: isDark ? "#fff" : "#000" },
          inputAndroid: { color: isDark ? "#fff" : "#000" },
        }}
      />

      <ScrollView style={styles.scrollArea}>
        <Text style={[styles.stat, { color: isDark ? "#ccc" : "#333" }]}>Hydration Level: 80%</Text>
        <Text style={[styles.stat, { color: isDark ? "#ccc" : "#333" }]}>Temperature: 22°C</Text>
        <Text style={[styles.stat, { color: isDark ? "#ccc" : "#333" }]}>Daily Intake: 1.5L</Text>
        <Text style={[styles.stat, { color: isDark ? "#ccc" : "#333" }]}>Goal Progress: 60%</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  scrollArea: { marginTop: 20 },
  stat: { fontSize: 18, marginBottom: 10 },
});