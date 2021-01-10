import axios, { AxiosInstance } from "axios";
// import { Store } from 'redux';

// import { userSelector } from '@Modules/user/selectors';
// import { logoutUser } from '@Modules/user/slice';
// import { RootState } from '@Store';
// import { RouterWithNextTickUpdate } from './routerWithNextTickUpdate';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://challenge.pushe.co/",
  headers: {
    Authorization:
      "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTAyOTUyNTIsImVtYWlsIjoiYW1pcnRoZWRldm9wc0BnbWFpbC5jb20iLCJpYXQiOjE2MTAyOTE2NTJ9.my96WY9lOVv1VMMTFa2xLmsscWQwzsSoOoZvy1EyZ4o",
  },
});
