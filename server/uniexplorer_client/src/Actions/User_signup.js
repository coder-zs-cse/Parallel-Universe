import axios from "axios";
import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../Constants/UserConstants";

export const UserSignup = (data) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  try {
    if (data) {
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
      localStorage.setItem("userInfo2", JSON.stringify(data));
    } else {
      dispatch({ type: USER_SIGNUP_FAIL, payload: "User Signup Fail" });
    }
  } catch (e) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: e.message });
  }
};
