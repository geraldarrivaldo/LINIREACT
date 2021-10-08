import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authState';
import warehouseInitialState from './initialStates/warehouseInitialState';
import auth from './reducers/auth';
import warehouse from './reducers/warehouse';
import product from './reducers/product';
import productInitialState from './initialStates/productInitialState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [warehouseState, warehouseDispatch] = useReducer(
    warehouse,
    warehouseInitialState,
  );
  const [productState, productDispatch] = useReducer(
    product,
    productInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        warehouseState,
        productState,
        productDispatch,
        authDispatch,
        warehouseDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
