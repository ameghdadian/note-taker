import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNote, removeNote, retrieveNotes } from "../../services/api/note";
import { INote } from "../../services/types/note";

export const getNotes = createAsyncThunk<INote[]>(
  "notes/getNotes",
  async () => {
    const data = await retrieveNotes();
    return data;
  }
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (id: string) => {
    try {
      await removeNote(id);
      console.log("resp of note deletion: ", id);
      return id;
    } catch (error) {
      console.log("An error happend when deleting post: ", error);
    }
  }
);

export const createNote = createAsyncThunk(
  "notes/createNote",
  async ({ title, content }: { title: string; content: string }) => {
    try {
      const resp = await addNote(title, content);
      if (resp?._id) {
        return resp;
      }
    } catch (error) {}
  }
);
