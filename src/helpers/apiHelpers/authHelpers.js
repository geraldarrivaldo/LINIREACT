import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes';
import axiosInstance from '../axiosInterceptors';

export const loginUser =
  ({password, user_login}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post('web/auth/login', {
        user_login,
        password,
      })
      .then(res => {
        console.log('res.data', res.data);
        // console.log('token', res.data.result);

        AsyncStorage.setItem('linistore', res.data.result);
        const token = res.data.result;
        const decoded = jwt_decode(token);

        console.log('decoded', decoded);

        AsyncStorage.setItem('user', JSON.stringify(decoded));

        AsyncStorage.setItem(
          'warehouse',
          JSON.stringify({
            id: decoded.vendor_id,
            name: decoded.vendor_name,
          }),
        );

        // AsyncStorage.setItem('user', JSON.stringify(res.data.getUser));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Tidak Ada Koneksi'},
        });
      });
  };

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};
export const regisUser =
  ({name, vendor_id, phone_number, password, password_confirmation}) =>
  dispatch =>
  onSuccess => {
    dispatch({
      type: REGISTER_LOADING,
    });
    axiosInstance
      .post('web/auth/register', {
        name,
        vendor_id,
        phone_number,
        password,
        password_confirmation,
      })
      .then(res => {
        console.log('res', res);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'something went wrong'},
        });
      });
  };

export const logoutUser = () => dispatch => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  dispatch({
    type: LOGOUT_USER,
  });
};
