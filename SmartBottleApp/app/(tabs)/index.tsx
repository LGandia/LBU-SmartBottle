import React from 'react';
import { View, Text } from 'react-native';

export default function OverviewTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Overview</Text>
      <Text>Summary of your hydration and activity stats.</Text>
    </View>
  );
}