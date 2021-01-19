import axios, { AxiosInstance } from "axios";
import { loadUserToken } from "./loadUserToken";

export const axiosInstance = () => {
  return axios.create({
    baseURL: "https://challenge.pushe.co/",
    headers: {
      Authorization: `jwt ${loadUserToken()}`,
    },
  });
};
