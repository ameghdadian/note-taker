import React, { FC, SetStateAction, Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokenSelector } from "../../modules/user/selectors";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import TextInput from "../TextInput/TextInput.component";
import CustomizableButton from "../CustomizableButton/CustomizableButton.component";
import { Divider } from "@material-ui/core";
import { ButtonWrapper, FormWrapper, Form } from "./styled-components";
import { createNote } from "../../modules/note/asyncActions";

// TODO: DON'T FORGET TO CHECK INPUT FOR NON-EMPTINESS AND VALIDITY

interface ICreateNote {
  onFormStateChange: Dispatch<SetStateAction<boolean>>;
}

const CreateNote: FC<ICreateNote> = ({ onFormStateChange }) => {
  const [formTitle, setFormTitle] = useState("");
  const [formContent, setFormContent] = useState("");
  const dispatch = useDispatch();

  const token = useSelector(tokenSelector) as string;

  const handleFormSubmit = () => {
    if (formTitle.length && formContent.length) {
      dispatch(createNote({ title: formTitle, content: formContent, token }));
      onFormStateChange((c) => !c);
    } else {
      console.log("You need to enter fill all the blank input.");
    }
  };

  return (
    <FormWrapper elevation={3}>
      <Form noValidate autoComplete="off">
        <TextInput
          placeholder="Note Title"
          variant="outlined"
          onChange={(e) => setFormTitle(e.target.value)}
          value={formTitle}
          required
        />
        <Divider />
        <TextInput
          fullWidth
          multiline
          rows={5}
          rowsMax={5}
          variant="outlined"
          placeholder="Take a note ..."
          onChange={(e) => setFormContent(e.target.value)}
          value={formContent}
          required
        />
        <Divider />
        <ButtonWrapper>
          <CustomizableButton
            startIcon={<SaveIcon />}
            size="medium"
            color="primary"
            variant="contained"
            onClick={handleFormSubmit}
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
