import React from 'react';
import { View, Text } from 'react-native';

export default function HydrationTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hydration</Text>
      <Text>Track your water intake and hydration levels.</Text>
    </View>
  );
}