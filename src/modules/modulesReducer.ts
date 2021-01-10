import { combineReducers } from "@reduxjs/toolkit";
import { notesReducer } from "./note/slice";

export const modulesReducer = combineReducers({
  note: notesReducer,
});
