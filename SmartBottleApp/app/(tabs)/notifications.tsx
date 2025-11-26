import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const NotificationsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Notifications</Text>
      <Text style={styles.subtitle}>
        Here you’ll be able to set reminders based on your hydration statistics.
      </Text>

      {/* Placeholder button for future implementation */}
      <Button title="Add New Notification" onPress={() => {}} />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 }
});