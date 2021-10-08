import React, {useContext, useEffect, useState} from 'react';
import HomeComponents from '../../components/HomeComponents';
import getProduct from '../../context/actions/product/getProduct';

import {GlobalContext} from '../../context/Provider';

const Home = ({navigation}) => {
  const {
    productDispatch,
    productState: {
      getProduct: {dataProduct, productLoading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getProduct(productDispatch);
    console.log('test');
  }, []);

  return (
    <HomeComponents dataProduct={dataProduct} productLoading={productLoading} />
  );
};

export default Home;
