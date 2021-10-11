import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {GlobalContext} from '../context/Provider';
import AuthNavigator from './AuthNavigator';
import StackNavigator from './StackNavigator';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const [isAuthenticated, setIsAutheticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        // console.log('test aja nih', user);
        // setAuthLoaded(true);
        setIsAutheticated(true);
      } else {
        // setAuthLoaded(true);
        setIsAutheticated(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  console.log('isautehn', isAuthenticated);
  return (
    // <NavigationContainer>
    //   <StackNavigator />
    // </NavigationContainer>

    <NavigationContainer>
      {isAuthenticated ? <StackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
