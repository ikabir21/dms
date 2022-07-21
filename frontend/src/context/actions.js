import Axios from "../api";
import {
  LOADING,
  LOGOUT,
  REGISTER,
  SET_PROFILE
} from "./constants";

const getActions = (dispatch) => {
  return {
    login: async (user) => {
      dispatch({ type: LOADING });
      try {
        const { data } = await Axios.post("/login", user);
        console.log(data);
        dispatch({ type: REGISTER, payload: data });
      } catch (error) {
        const msg = error.response.status === 401
        ? "Access Denied"
        : error.response && error.response?.data?.message
        ? error.response?.data?.message
        : error.message
        alert(msg)
      }
    },
    register: async (user) => {
      dispatch({ type: LOADING });
      try {
        const { data } = await Axios.post("/register", user);
        console.log(data);
        dispatch({ type: REGISTER, payload: data });
      } catch (error) {
        const msg = error.response.status === 401
        ? "Already Registered"
        : error.response && error.response?.data?.message
        ? error.response?.data?.message
        : error.message
        alert(msg)
      }
    },
    logout: () => {
      dispatch({ type: LOGOUT });
    },
    getProfile: async () => {
      dispatch({ type: LOADING });
      try {
        const { data } = await Axios.get("/profile");
        console.log(data)
        dispatch({ type: SET_PROFILE, payload: data });
      } catch (error) {
        const msg = error.response.status === 401
        ? "Access Denied"
        : error.response && error.response?.data?.message
        ? error.response?.data?.message
        : error.message

        alert(msg)
      }
    }
  };
};

export default getActions;
