import {
  GET_WAREHOUSE_FAIL,
  GET_WAREHOUSE_LOADING,
  GET_WAREHOUSE_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptors';

export default () => dispatch => {
  dispatch({
    type: GET_WAREHOUSE_LOADING,
  });

  axiosInstance
    .get('web/vendor')
    .then(res => {
      console.log('warehouseList', res.data.result.vendors.rows);
      dispatch({
        type: GET_WAREHOUSE_SUCCESS,
        payload: res.data.result.vendors.rows,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_WAREHOUSE_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'something went wrong, try again'},
      });
    });
};
