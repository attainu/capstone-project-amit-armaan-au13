import axios from "axios";
import {
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_RESET
   } from "../constants/userListConstants";



export const listUser = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });


    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error,
    });
  }
};
