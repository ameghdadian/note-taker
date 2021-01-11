import React, { useState } from "react";
import { BodyWrapper } from "./styled-components";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import CustomizableButton from "../../ReusableComponents/CustomizableButton/CustomizableButton.component";
import CreateNote from "../../ReusableComponents/CreateNote/CreateNote.component";
import NotesList from "../NotesList/NotesList.component";

const AppBody = () => {
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
