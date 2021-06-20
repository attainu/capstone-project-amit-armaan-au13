import axios from "axios";
import { USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS } from "../constants/userDeleteConstants";


export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/users/${id}`, config);
    dispatch({
      type: USER_DELETE_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload: error,
    });
  }
};
