/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
// import { getToken } from "../utils/helper";
import { store } from "../store";

const API_URL =
  process.env.API_URL || "https://quiet-shore-27983.herokuapp.com/api/";

export default () => {
  // const token: string | null = typeof window !== "undefined" ? getToken() : "";

  const state = store.getState();
  const token =
    state.userReducer.userToken != null
      ? state.userReducer.userToken
      : state.userReducer.userInfo != null
      ? state.userReducer.userInfo.token
      : null;

  const API = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  API.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem("Token");
        console.log("error.reponse", error.response);
      }
      return Promise.reject(error);
    }
  );

  return API;
};
