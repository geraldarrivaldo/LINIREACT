import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LOGIN, REGISTER} from '../../constants/routeNames';
import Login from '../../screens/Login';
import Register from '../../screens/Register';

const AuthNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={LOGIN} component={Login}></Stack.Screen>
      <Stack.Screen name={REGISTER} component={Register}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
