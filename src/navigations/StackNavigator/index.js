import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text} from 'react-native';
import {
  AUTH_NAVIGATOR,
  CART_LIST,
  CART_LIST_STACK,
  HOME_NAVIGATOR,
  LOGIN,
  PRODUCT_DETAIL,
  PROFILE,
  REGISTER,
} from '../../constants/routeNames';
import CartList from '../../screens/CartList';
import ProductDetail from '../../screens/ProductDetail';
import HomeNavigator from '../HomeNavigator';
import Icon from '../../common/Icon';
import Profile from '../../screens/Profile';
import colors from '../../assets/theme/colors';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import {GlobalContext} from '../../context/Provider';
import AuthNavigator from '../AuthNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const {authDispatch} = React.useContext(GlobalContext);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
      <Stack.Screen name={CART_LIST_STACK} component={CartList} />
      <Stack.Screen name={PROFILE} component={Profile} />
      <Stack.Screen name={PRODUCT_DETAIL} component={ProductDetail} />
      <Stack.Screen name={AUTH_NAVIGATOR} component={AuthNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
