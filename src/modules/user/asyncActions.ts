import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "../../services/api/user";
import { IUserCredentials } from "../../services/types/user";
import { setIsLoaded } from "../note/slice";
import { getNotes } from "../note/asyncActions";

export const getCredentials = createAsyncThunk(
  "user/getCredentials",
  async ({ email, password }: IUserCredentials, { dispatch }) => {
    const data = await getAuth(email, password);
    if (data?.token) {
      dispatch(setIsLoaded());
      dispatch(getNotes(data.token));
    }
    return data;
  }
);
