import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_WAREHOUSE_FAIL,
  GET_WAREHOUSE_LOADING,
  GET_WAREHOUSE_SUCCESS,
} from '../../constants/actionTypes';

const warehouse = (state, {type, payload}) => {
  switch (type) {
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
    default:
      return state;
  }
};

export default warehouse;
