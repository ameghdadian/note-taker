import { createSlice } from "@reduxjs/toolkit";
import { getCredentials } from "./asyncActions";
import store from "store";

export interface IUserState {
  isFetching: boolean;
  isLoaded: boolean;
  token: string;
  isTokenInvalidated: boolean;
}

export const initialState: IUserState = {
  isFetching: false,
  isLoaded: false,
  token: "",
  isTokenInvalidated: true,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    invalidateToken(state) {
      store.remove("token");
      state.isTokenInvalidated = true;
      state.token = "";
    },
    setToken(state, { payload }) {
      state.token = payload;
    },
    legitimizeToken(state) {
      state.isTokenInvalidated = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(getCredentials.pending, (state) => {
      state.isFetching = true;
      state.isLoaded = false;
    });

    builder.addCase(getCredentials.rejected, (state) => {
      state.isFetching = false;
      state.isLoaded = true;
    });

    builder.addCase(getCredentials.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isLoaded = true;
      state.isTokenInvalidated = false;
      store.set("token", payload.token);
      state.token = payload.token;
    });
  },
});

export const userReducer = userSlice.reducer;
export const { invalidateToken, setToken, legitimizeToken } = userSlice.actions;
