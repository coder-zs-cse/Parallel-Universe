import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../Constants/UserConstants";

const Userlogin = (data) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {

 
  
    if (data) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo2", JSON.stringify(data));
    } else {
      dispatch({ type: USER_LOGIN_FAIL, payload: "User Signin Fail" });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: USER_LOGIN_FAIL, payload: e });
  }
};

export default Userlogin;
