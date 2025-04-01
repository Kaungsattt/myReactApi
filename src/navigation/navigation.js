import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../screens/homePage';
import LoginPage from '../screens/loginPage';
import BlogPage from '../screens/BlogPage';




const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name='LoginPage'
        component={LoginPage}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
      />
      <Stack.Screen
        name="BlogPage"
        component={BlogPage}
      
      />

    </Stack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}

export default Navigation