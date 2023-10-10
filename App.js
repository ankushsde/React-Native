import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FinalResult from './src/Assignment_BoomTv/FinalResultScreen/FinalResult';

export default function App() {

  return (
    <View style={styles.container}>
      <FinalResult/>
      {/* <Text>OKay It works</Text> */}
      <StatusBar style="auto" />
    </View>
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
