import React, { useState } from "react";
import { BodyWrapper } from "./styled-components";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import CustomizableButton from "../CustomizableButton/CustomizableButton.component";
import CreateNote from "../CreateNote/CreateNote.component";
import NotesList from "../NotesList/NotesList.component";

const AppBody = () => {
  // TODO: Remember to change The Buttun text from Create your first note(At first try) to Create a Note
  const [formOpenState, setFormOpenState] = useState(false);
  return (
    <BodyWrapper elevation={3}>
      <CustomizableButton
        startIcon={<NoteAddIcon />}
        variant="contained"
        color="primary"
        onClick={() => setFormOpenState(true)}
      >
        Create a note
      </CustomizableButton>
      {formOpenState && <CreateNote onFormStateChange={setFormOpenState} />}
      <NotesList />
    </BodyWrapper>
  );
};

export default AppBody;
