import { combineReducers } from "@reduxjs/toolkit";
import { modulesReducer } from "./modules/modulesReducer";

export const rootReducer = combineReducers({
  modules: modulesReducer,
});
