import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "../../services/api/user";
import { IUser } from "../../services/types/user";

export const getCredentials = createAsyncThunk(
  "user/getCredentials",
  async () => {
    const data = await retrieveNotes();
    return data;
  }
);
