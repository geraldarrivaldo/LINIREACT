import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authState';
import auth from './reducers/auth';

import data from './reducers/data';
import dataInitialState from './initialStates/dataInitialState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [dataState, dataDispatch] = useReducer(data, dataInitialState);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        dataState,

        authDispatch,
        dataDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
