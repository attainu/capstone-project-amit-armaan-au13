import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS ,USER_LIST_RESET} from "../constants/userListConstants";


export const userListReducer = (state = {users:[]}, { type, payload }) => {
  switch (type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: payload,
      };
    case USER_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
      case USER_LIST_RESET:
        return{users:[]}
    default:
      return state;
  }
};
