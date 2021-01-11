import React, { FC, useEffect } from "react";
import { Container } from "@material-ui/core";
import AppHeader from "../AppHeader/AppHeader.component";
import AppBody from "../AppBody/AppBody.component";
import SignIn from "../SignIn/Signin.component";
import { loadUserToken } from "../../utils/loadUserToken";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../modules/note/asyncActions";
import { setToken, invalidateToken } from "../../modules/user/slice";
import { isTokenInvalidatedSelector } from "../../modules/user/selectors";
import { ExitButton } from "./styled-components";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Main: FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Token saved inside user's pc
    const pcSavedToken = loadUserToken();
    dispatch(setToken(pcSavedToken));
    dispatch(getNotes(pcSavedToken));
  }, []);

  const isTokenInvalid = useSelector(isTokenInvalidatedSelector);
  return (
    <>
      {!isTokenInvalid ? (
        <>
          <AppHeader />
          <Container maxWidth="md">
            <AppBody />
            <ExitButton
              color="primary"
              aria-label="add"
              onClick={() => dispatch(invalidateToken())}
            >
              <ExitToAppIcon />
            </ExitButton>
          </Container>
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Main;
