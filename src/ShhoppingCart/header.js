import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const header = () => {
  return (
    <View  style={styles.container}>
      <Text  style={{padding:10, fontSize:30, textAlign:'right', backgroundColor:"green",}}>0</Text>
    </View>
  )
}

export default header

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop:35
      },
})