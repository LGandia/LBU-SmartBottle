import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OverviewTab from './index';
import HydrationTab from './hydration';
import ActivityTab from './activity';
import ProfileTab from './profile';

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator initialRouteName="Overview">
      <Tab.Screen name="Overview" component={OverviewTab} />
      <Tab.Screen name="Hydration" component={HydrationTab} />
      <Tab.Screen name="Activity" component={ActivityTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
}