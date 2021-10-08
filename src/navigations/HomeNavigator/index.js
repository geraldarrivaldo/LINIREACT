import React from 'react';
import {Settings, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Home';
import {
  CART_LIST,
  CHECKOUT_CART,
  HOME,
  PRODUCT_DETAIL,
  PROFILE,
} from '../../constants/routeNames';
import CartList from '../../screens/CartList';
import Profile from '../../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../../assets/theme/colors';
import Icon from '../../common/Icon';

const HomeNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === HOME) {
            iconName = focused ? 'home' : 'md-home-outline';
            return (
              <Icon type="ionicon" name={iconName} size={size} color={color} />
            );
          } else if (route.name === CART_LIST) {
            iconName = focused ? 'cart-sharp' : 'ios-cart-outline';
            return (
              <Icon type="ionicon" name={iconName} size={size} color={color} />
            );
          } else if (route.name === PROFILE) {
            iconName = focused ? 'user' : 'user-o';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={HOME} component={Home}></Tab.Screen>
      <Tab.Screen name={CART_LIST} component={CartList}></Tab.Screen>
      <Tab.Screen name={PROFILE} component={Profile}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
