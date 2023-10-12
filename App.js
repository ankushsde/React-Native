import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FinalResult from './src/Assignment_BoomTv/FinalResultScreen/FinalResult';
import ToDoScreen from './src/ToDoList/ToDoScreen';
export default function App() {

  return (
    <SafeAreaView>
      <View >
        <ToDoScreen />
       </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
