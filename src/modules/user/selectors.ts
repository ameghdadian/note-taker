import { RootState } from "../../store";
import { createSelector } from "reselect";
import { initialState } from "./slice";

const selectToken = (state: RootState) => state.modules?.user || initialState;

export const tokenSelector = createSelector(
  selectToken,
  (substate) => substate.token
);

export const isTokenInvalidatedSelector = createSelector(
  selectToken,
  (substate) => substate.isTokenInvalidated
);
