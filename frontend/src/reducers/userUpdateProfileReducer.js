import {
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../constants/userUpdateConstants";

export const userUpdateProfileReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
        success: true,
      };
    case USER_UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: payload,
      };
      case USER_UPDATE_PROFILE_RESET:
        return {}
    default:
      return state;
  }
};
