import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from '../../constants/actionTypes';

const product = (state, {type, payload}) => {
  switch (type) {
    case GET_PRODUCT_LOADING:
      return {
        ...state,
        getProduct: {
          ...state.getProduct,
          productLoading: true,
          productError: null,
        },
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        getProduct: {
          ...state.getProduct,
          productLoading: false,
          dataProduct: payload,
          productError: null,
        },
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        getProduct: {
          ...state.getProduct,
          productLoading: false,
          productError: payload,
        },
      };
    default:
      return state;
  }
};

export default product;
