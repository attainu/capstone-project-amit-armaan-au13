import axios from "axios";
import { USER_LOGIN_SUCCESS } from "../constants/userLoginConstant";
import { USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userUpdateConstants";

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });

    // to get token once user loggedIn,

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`api/users/profile`,user, config);
    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });

dispatch({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

localStorage.setItem('userInfo',JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: error,
    });
  }
};
