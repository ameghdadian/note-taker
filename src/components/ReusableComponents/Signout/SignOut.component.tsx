import React from "react";
import { useDispatch } from "react-redux";
import { ExitButton } from "./styled-components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { invalidateToken } from "../../../modules/user/slice";
import { clearNoteState } from "../../../modules/note/slice";

const SignOut = () => {
  const dispatch = useDispatch();
  return (
    <ExitButton
      color="primary"
      aria-label="add"
      onClick={() => {
        dispatch(invalidateToken());
        dispatch(clearNoteState());
      }}
    >
      <ExitToAppIcon />
    </ExitButton>
  );
};

export default SignOut;
