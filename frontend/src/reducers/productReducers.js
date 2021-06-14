
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL
} from '../constants/productConstants'

export const productListReducer = (state={productItems:[]},action)=>{
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, productItems: [] };
      case PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          productItems: action.payload,
        };
      case PRODUCT_LIST_FAIL:
        return {
          productItems:[],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
} 