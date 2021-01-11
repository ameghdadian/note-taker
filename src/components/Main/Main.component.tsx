import React, { FC, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import AppBody from "../FeatureSpecificComponent/AppBody/AppBody.component";
import AppHeader from "../ReusableComponents/AppHeader/AppHeader.component";
import SignIn from "../ReusableComponents/SignIn/Signin.component";
import SignOut from "../ReusableComponents/Signout/SignOut.component";
import { loadUserToken } from "../../utils/loadUserToken";
import { getNotes } from "../../modules/note/asyncActions";
import { setToken } from "../../modules/user/slice";
import { isTokenInvalidatedSelector } from "../../modules/user/selectors";

const Main: FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Retrieve Token saved inside user's localStorage
    const pcSavedToken = loadUserToken();
    // Need to check token when user closed the session, but didn't signout(Thus token is still present)
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
            <SignOut />
          </Container>
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Main;
