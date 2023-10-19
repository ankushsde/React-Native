import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import FinalResult from './src/Assignment_BoomTv/FinalResultScreen/FinalResult';
import ToDoScreen from './src/ToDoList/ToDoScreen';
import Header from './src/ShhoppingCart/header';
import Product from './src/ShhoppingCart/product';
import { Button } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './Services/Redux/store';


const AppRedux = ( ) => {
 <Provider store={store}>
   <App/>
 </Provider>

}

export default function App() {
  const products = [
    {
        name:'Landscape',
        color: 'white',
        price:2000,
        image:'https://picsum.photos/seed/picsum/200/300'
    },
    {
        name:'GrayScale',
        color: 'grey',
        price:3000,
        image:'https://picsum.photos/200/300?grayscale'
    },
    {
        name:'Blur',
        color: 'white',
        price:4000,
        image:'https://picsum.photos/200/300/?blur'
    },

]
  return (
       <View style={styles.container}>
      <Header/>
      <ScrollView  >
  
        {
          products.map((item=> <Product item={item}/>))
        }
       </ScrollView>
       </View>

 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
});
