import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_WAREHOUSE_FAIL,
  GET_WAREHOUSE_LOADING,
  GET_WAREHOUSE_SUCCESS,
} from '../../constants/actionTypes';

const barang = (state, {type, payload}) => {
  switch (type) {
    case GET_PRODUCT_LOADING:
      return {
        ...state,
        getBarang: {
          ...state.getBarang,
          barangLoading: true,
          barangError: null,
        },
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        getBarang: {
          ...state.getBarang,
          barangLoading: false,
          dataBarang: payload,
          barangError: null,
        },
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        getBarang: {
          ...state.getBarang,
          barangLoading: false,
          barangError: payload,
        },
      };
    default:
      return state;
  }
};

export default barang;
