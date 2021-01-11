import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "../../services/api/user";
import { IUserCredentials } from "../../services/types/user";

export const getCredentials = createAsyncThunk(
  "user/getCredentials",
  async ({ email, password }: IUserCredentials, { dispatch }) => {
    const data = await getAuth(email, password);
    return data;
  }
);
