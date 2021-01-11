import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { persistStore } from "redux-persist";

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
