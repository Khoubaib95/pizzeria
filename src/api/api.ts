import axios from "axios";

const URL = process.env.REACT_APP_URL;

const timeoutConfig = {
  timeout: 5000,
};

const authorizationConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
  ...timeoutConfig,
};

// public routes
export const get = (endpoint: string = "") =>
  axios.get(`${URL}/${endpoint}`, authorizationConfig);

export const post = (endpoint: string, data: any) =>
  axios.post(`${URL}/${endpoint}`, data, { /*...config,*/ ...timeoutConfig });

// protected routes
export const protectedGet = (endpoint: string) =>
  axios.get(`${URL}/${endpoint}`, authorizationConfig);
