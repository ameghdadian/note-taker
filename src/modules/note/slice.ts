import { createSlice } from "@reduxjs/toolkit";
import { createNote, deleteNote, getNotes } from "./asyncActions";
import { INote } from "../../services/types/note";

export interface INotesState {
  isFetching: boolean;
  isLoaded: boolean;
  notes: INote[];
}

export const initialState: INotesState = {
  isFetching: false,
  isLoaded: false,
  notes: [],
};

const notesSlice = createSlice({
  initialState,
  name: "notes",
  reducers: {
    clearNoteState(state) {
      state.isFetching = false;
      state.isLoaded = false;
      state.notes = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(deleteNote.fulfilled, (state, action) => {
      let noteIndex = state.notes.findIndex(
        (note) => note._id === action.payload
      );
      state.notes.splice(noteIndex, 1);
    });

    builder.addCase(getNotes.pending, (state) => {
      state.isFetching = true;
      state.isLoaded = false;
    });

    builder.addCase(getNotes.rejected, (state) => {
      state.isFetching = false;
      state.isLoaded = false;
    });

    builder.addCase(getNotes.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isLoaded = true;
      if (payload) {
        state.notes = payload as INote[];
      }
    });

    builder.addCase(createNote.pending, (state) => {
      state.isFetching = true;
    });

    builder.addCase(createNote.rejected, (state) => {
      state.isFetching = false;
    });

    builder.addCase(createNote.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.notes.push(payload as INote);
    });
  },
});

export const notesReducer = notesSlice.reducer;
export const { clearNoteState } = notesSlice.actions;
