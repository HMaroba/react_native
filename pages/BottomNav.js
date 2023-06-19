import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegistrationForm from '../App';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen1" component={RegistrationForm} />
      <Tab.Screen name="Screen2" component={RegistrationForm} />
      <Tab.Screen name="Screen3" component={RegistrationForm} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
