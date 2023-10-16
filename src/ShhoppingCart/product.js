import { StyleSheet, Text, View, Button,Image } from 'react-native'
import React from 'react'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../Services/Redux/action'

const product = (props) => {

    const item = props.item

    // const dispatch = useDispatch();


    const handleAddToCart = (item) => {
        console.log("called",item)
        // dispatch()
    }

    return (
        <View style={{alignItems:"center",borderBottomColor:'grey',borderBottomWidth:3,padding:10}}>
            
            <Image style={{ width: 300, height: 200 }} source={{ uri: item.image }} />
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 16 }}>{item.price}</Text>
            <Text style={{ fontSize: 16 }}>{item.color}</Text>
            <Button title='Add to cart' onPress={()=>handleAddToCart(item)} />
        </View>
    )
}

export default product

const styles = StyleSheet.create({})