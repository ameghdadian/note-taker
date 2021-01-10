import { RootState } from "../../store";
import { createSelector } from "reselect";
import { initialState } from "./slice";

const selectNotes = (state: RootState) => state.modules?.note || initialState;

export const notesSelector = createSelector(
  selectNotes,
  (substate) => substate
);
