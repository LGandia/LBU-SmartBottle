import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Profile</Text>
      <Text>Manage your personal details, hydration goals, and preferences.</Text>
    </View>
  );
}