import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNote, removeNote, retrieveNotes } from "../../services/api/note";
import { INote } from "../../services/types/note";
import { invalidateToken, legitimizeToken } from "../user/slice";
import { RootState } from "../../store";

export const getNotes = createAsyncThunk<INote[] | void | string, string>(
  "notes/getNotes",
  async (token, { dispatch, getState, rejectWithValue }) => {
    console.log(getState());
    const resp = await retrieveNotes(token);
    if (resp === "user is not authorized") {
      dispatch(invalidateToken());
      return rejectWithValue(resp);
    }
    dispatch(legitimizeToken());
    return resp;
  }
);

export const deleteNote = createAsyncThunk<
  string,
  {
    id: string;
    token: string;
  }
>("notes/deleteNote", async ({ id, token }, { dispatch }) => {
  const resp = await removeNote(id, token);
  if (resp === "user is not authorized") {
    dispatch(invalidateToken());
  }
  return id;
});

export const createNote = createAsyncThunk<
  INote | void,
  {
    title: string;
    content: string;
    token: string;
  },
  { state: RootState }
>("notes/createNote", async ({ title, content, token }, { dispatch }) => {
  const resp = await addNote(title, content, token);
  if (resp === "user is not authorized") {
    dispatch(invalidateToken());
  }
  if (typeof resp !== "string") {
    return resp;
  }
});
