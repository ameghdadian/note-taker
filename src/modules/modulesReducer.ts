import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { notesReducer } from "./note/slice";
import { userReducer } from "./user/slice";

const notePersistConfig = {
  key: "note",
  storage: storageSession,
  whitelist: ["isLoaded"],
};

const userPersistConfig = {
  key: "user",
  storage: storageSession,
  whitelist: ["isTokenInvalidated"],
};

export const modulesReducer = combineReducers({
  note: persistReducer(notePersistConfig, notesReducer),
  user: persistReducer(userPersistConfig, userReducer),
});
