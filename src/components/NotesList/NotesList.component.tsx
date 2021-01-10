import React, { useEffect } from "react";
import { CircularLoader, StyledText } from "./styled-components";
import NoteItem from "../NoteItem/NoteItem.component";
import NoteList from "../NoteList/NoteList.component";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../modules/note/asyncActions";
import { notesSelector } from "../../modules/note/selectors";
import { tokenSelector } from "../../modules/user/selectors";

const NotesList = () => {
  // Render it provided there is some previously added note, at the same time run a loader when it's fetching
  // Return no Previously added note if there is not any.
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
          <StyledText variant="h6" color="textSecondary">
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
