// Create a file (e.g., StackNavigator.js)
import { createStackNavigator } from '@react-navigation/stack';

import WinnerBracket from './WinnerBracket';
import LowerBracket from './LowerBracket';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Winner Bracket" component={WinnerBracket} />
      <Stack.Screen name="Lower Bracket" component={LowerBracket} />
    </Stack.Navigator>
  );
}
