import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_WAREHOUSE_FAIL,
  GET_WAREHOUSE_LOADING,
  GET_WAREHOUSE_SUCCESS,
} from '../../constants/actionTypes';

const data = (state, {type, payload}) => {
  switch (type) {
    //GET WAREHOUSE
    case GET_WAREHOUSE_LOADING:
      return {
        ...state,
        getWarehouse: {
          ...state.getWarehouse,
          warehouseLoading: true,
          warehouseError: null,
        },
      };

    case GET_WAREHOUSE_SUCCESS:
      return {
        ...state,
        getWarehouse: {
          ...state.getWarehouse,
          warehouseLoading: false,
          dataWarehouse: payload,
          warehouseError: null,
        },
      };
    case GET_WAREHOUSE_FAIL:
      return {
        ...state,
        getWarehouse: {
          ...state.getWarehouse,
          warehouseLoading: false,
          warehouseError: payload,
        },
      };

    //Get PRODUCT

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

export default data;
