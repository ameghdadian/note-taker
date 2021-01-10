import { combineReducers } from "@reduxjs/toolkit";
import { notesReducer } from "./note/slice";
import { userReducer } from "./user/slice";

export const modulesReducer = combineReducers({
  note: notesReducer,
  user: userReducer,
});
