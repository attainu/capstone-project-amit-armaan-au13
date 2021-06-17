import axios from "axios";
import { USER_LOGIN_SUCCESS } from "../constants/userLoginConstant";
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS } from "../constants/userDetailsConstants";


export const getUserDetails = (id) => async (dispatch,getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

const{userLogin:{userInfo}}=getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${userInfo.token}`
      },
    };

    const { data } = await axios.get(
      `api/users/${id}`,
      config
    );
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error
    });
  }
};
