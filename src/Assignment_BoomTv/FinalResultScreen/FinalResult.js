import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
 
const FinalResult = () => {
    return (
        <NavigationContainer>
                 <TabNavigator />

         </NavigationContainer>
    )
}

export default FinalResult
