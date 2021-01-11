import React, { useEffect } from "react";
import { CircularLoader, StyledText } from "./styled-components";
import NoteItem from "../../ReusableComponents/NoteItem/NoteItem.component";
import NoteList from "../../ReusableComponents/NoteList/NoteList.component";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../../modules/note/asyncActions";
import { notesSelector } from "../../../modules/note/selectors";
import { tokenSelector } from "../../../modules/user/selectors";

const NotesList = () => {
  const { notes, isFetching, isLoaded } = useSelector(notesSelector);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      dispatch(getNotes(token));
    }
  }, [isLoaded]);

  return !isFetching ? (
    <>
      {notes.length ? (
        <>
          <StyledText mb1 variant="h6" color="textSecondary">
            List Of Previously Added Notes
          </StyledText>
          <NoteList>
            {notes.map(({ _id, ...note }) => {
              return <NoteItem note={note} key={_id} id={_id} />;
            })}
          </NoteList>
        </>
      ) : (
        <>
          <StyledText variant="h6" color="textSecondary">
            You note list is empty. Start Now!
          </StyledText>
        </>
      )}
    </>
  ) : (
    <CircularLoader />
  );
};

export default NotesList;
