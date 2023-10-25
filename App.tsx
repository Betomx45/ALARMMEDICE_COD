import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './MainScreen';
import LoginScreen from './features/auth/application/screens/login';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    /*
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="Alarm Medice"
          component={MainScreen}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    */

    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Alarm Medice"
          component={MainScreen}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
