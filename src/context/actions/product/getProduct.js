import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptors';

export default () => dispatch => {
  dispatch({
    type: GET_PRODUCT_LOADING,
  });

  axiosInstance
    .get('web/product')
    .then(res => {
      console.log('getProduct', res.data.result.products.rows);
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data.result.products.rows,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PRODUCT_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'something went wrong, try again'},
      });
    });
};
