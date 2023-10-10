// Create a file (e.g., TabNavigator.js)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      {/* Add more screens here if needed */}
    </Tab.Navigator>
  );
}
