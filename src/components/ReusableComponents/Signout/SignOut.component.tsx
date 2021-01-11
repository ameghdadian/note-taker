import React from "react";
import { useDispatch } from "react-redux";
import { ExitButton } from "./styled-components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { invalidateToken } from "../../../modules/user/slice";

const SignOut = () => {
  const dispatch = useDispatch();
  return (
    <ExitButton
      color="primary"
      aria-label="add"
      onClick={() => dispatch(invalidateToken())}
    >
      <ExitToAppIcon />
    </ExitButton>
  );
};

export default SignOut;
