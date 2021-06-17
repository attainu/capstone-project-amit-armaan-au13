
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL
} from '../constants/productConstants'

export const productListReducer = (state={productItems:[]},{type,payload})=>{
    switch (type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, productItems: [] };
      case PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          productItems: payload,
        };
      case PRODUCT_LIST_FAIL:
        return {
          productItems:[],
          loading: false,
          error: payload,
        };
      default:
        return state;
    }
} 