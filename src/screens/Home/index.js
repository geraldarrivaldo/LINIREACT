import React, {useContext, useEffect, useState} from 'react';
import HomeComponents from '../../components/HomeComponents';
import getBarang from '../../context/actions/warehouse/getBarang';
import getData from '../../context/actions/warehouse/getData';

import {GlobalContext} from '../../context/Provider';

const Home = ({navigation}) => {
  const {
    dataDispatch,
    dataState: {
      getProduct: {dataProduct, productLoading},
    },
  } = useContext(GlobalContext);

  // useEffect(() => {
  //   // getData(dataDispatch);
  //   axiosInstance
  //     .get('web/product')
  //     .then(res => {
  //       console.log('productList', res.data.result.products.rows);
  //       dispatch({
  //         type: GET_PRODUCT_SUCCESS,
  //         payload: res.data.result.products.rows,
  //       });
  //     })
  //     .catch(err => {
  //       dispatch({
  //         type: GET_PRODUCT_FAIL,
  //         payload: err.response
  //           ? err.response.data
  //           : {error: 'something went wrong, try again'},
  //       });
  //     });
  //   console.log('test');
  // }, []);

  return (
    <HomeComponents dataProduct={dataProduct} productLoading={productLoading} />
  );
};

export default Home;
