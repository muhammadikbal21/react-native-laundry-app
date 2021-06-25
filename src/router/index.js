import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Splash from '../pages/Splash';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
