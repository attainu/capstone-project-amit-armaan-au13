import { USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS } from "../constants/userDeleteConstants";

export const userDeleteReducer = (state = { }, { type, payload }) => {
  switch (type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return {
        loading: false,
        
        success:true
      };
    case USER_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
