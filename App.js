import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import Signup from './src/Signup';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
