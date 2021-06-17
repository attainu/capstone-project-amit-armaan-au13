import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, {type,payload}) => {
  
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
    
      const existItem = state.cartItems.find((x) => x.product === item.product);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
