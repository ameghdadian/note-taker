import React from "react";
import {
  BodyWrapper,
  FormWrapper,
  Form,
  ButtonWrapper,
} from "./styled-components";
import { Typography, Grid, Divider } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import CustomizableButton from "../CustomizableButton/CustomizableButton.component";
import TextInput from "../TextInput/TextInput.component";

const AppBody = () => {
  // TODO: Remember to change The Buttun text from Create your first note(At first try) to Create a Note
  return (
    <BodyWrapper elevation={3}>
      <CustomizableButton
        startIcon={<NoteAddIcon />}
        variant="contained"
        color="primary"
      >
        Create a note
      </CustomizableButton>
      <Grid container direction="column" alignItems="stretch">
        <Grid item>
          <FormWrapper elevation={3}>
            <Form noValidate autoComplete="off">
              <TextInput id="" placeholder="Note Title" variant="outlined" />
              <Divider />
              <TextInput
                id=""
                size="small"
                fullWidth
                multiline
                rows={5}
                rowsMax={5}
                variant="outlined"
                placeholder="Take a note ..."
              />
              <Divider />
              <ButtonWrapper>
                <CustomizableButton
                  size="medium"
                  color="primary"
                  variant="contained"
                >
                  Save
                </CustomizableButton>
                <CustomizableButton
                  size="medium"
                  color="secondary"
                  variant="contained"
                >
                  Discard
                </CustomizableButton>
              </ButtonWrapper>
            </Form>
          </FormWrapper>
        </Grid>
      </Grid>
      <Typography>List Of Previously Added Notes</Typography>
    </BodyWrapper>
  );
};

export default AppBody;
