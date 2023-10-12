import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const Fallback = () => {
  
  return (
    <View>
    <Image 
     source={require("../../assets/to_do_list.png")}
     style={{width:300,height:300}}
    /> 
     </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})