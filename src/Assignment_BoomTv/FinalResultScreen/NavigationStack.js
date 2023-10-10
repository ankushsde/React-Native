import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import WinnerBracket from './WinnerBracket';
import LowerBracket from './LowerBracket';

const Tab = createMaterialTopTabNavigator();

const NavigationStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Winner Bracket" component={WinnerBracket} options={{ tabBarLabel: 'Winner' }} />
      <Tab.Screen name="Lower Bracket" component={LowerBracket} options={{ tabBarLabel: 'Lower' }} />
    </Tab.Navigator>
  );
};

export default NavigationStack;
