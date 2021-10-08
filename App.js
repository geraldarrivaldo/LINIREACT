import React from 'react';
import {View, Text} from 'react-native';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
};

export default App;
