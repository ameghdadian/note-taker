import React, { FC, SetStateAction, Dispatch, useState } from "react";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import TextInput from "../TextInput/TextInput.component";
import CustomizableButton from "../CustomizableButton/CustomizableButton.component";
import { Divider } from "@material-ui/core";
import { ButtonWrapper, FormWrapper, Form } from "./styled-components";

interface ICreateNote {
  onFormStateChange: Dispatch<SetStateAction<boolean>>;
}

const CreateNote: FC<ICreateNote> = ({ onFormStateChange }) => {
  const [formTitle, setFormTitle] = useState("");
  const [formContent, setFormContent] = useState("");

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Title: ", formTitle);
    console.log("Form Content: ", formContent);
  };

  return (
    <FormWrapper elevation={3}>
      <Form
        noValidate
        autoComplete="off"
        onSubmit={(event) => {
          handleFormSubmit(event);
          onFormStateChange((c) => !c);
        }}
      >
        <TextInput
          id=""
          placeholder="Note Title"
          variant="outlined"
          onChange={(e) => setFormTitle(e.target.value)}
          value={formTitle}
        />
        <Divider />
        <TextInput
          id=""
          fullWidth
          multiline
          rows={5}
          rowsMax={5}
          variant="outlined"
          placeholder="Take a note ..."
          onChange={(e) => setFormContent(e.target.value)}
          value={formContent}
        />
        <Divider />
        <ButtonWrapper>
          <CustomizableButton
            type="submit"
            startIcon={<SaveIcon />}
            size="medium"
            color="primary"
            variant="contained"
          >
            Save
          </CustomizableButton>
          <CustomizableButton
            startIcon={<CancelIcon />}
            size="medium"
            color="secondary"
            variant="contained"
            onClick={() => onFormStateChange((c) => !c)}
          >
            Discard
          </CustomizableButton>
        </ButtonWrapper>
      </Form>
    </FormWrapper>
  );
};

export default CreateNote;
