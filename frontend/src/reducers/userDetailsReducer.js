import { USER_DETAILS_FAIL,
     USER_DETAILS_REQUEST, 
     USER_DETAILS_SUCCESS 
    } 
    from "../constants/userDetailsConstants";

export const userDetailsReducer = (state = {user:{ }}, { type, payload }) => {
  switch (type) {
    case USER_DETAILS_REQUEST:
      return { ...state,loading: true };
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: payload,
      };
    case USER_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
