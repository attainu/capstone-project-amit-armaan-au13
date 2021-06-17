import axios from "axios";
import { USER_LOGIN_SUCCESS } from "../constants/userLoginConstant";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userRegisterConstants";

export const register = (name,email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      {name, email, password },
      config
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({USER_LOGIN_SUCCESS,
                payload:data})

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.message,
    });
  }
};


