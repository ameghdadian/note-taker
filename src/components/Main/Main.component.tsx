import React, { FC, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import AppBody from "../FeatureSpecificComponents/AppBody/AppBody.component";
import AppHeader from "../ReusableComponents/AppHeader/AppHeader.component";
import SignIn from "../ReusableComponents/SignIn/Signin.component";
import SignOut from "../ReusableComponents/Signout/SignOut.component";
import { loadUserToken } from "../../utils/loadUserToken";
import { getNotes } from "../../modules/note/asyncActions";
import { setToken } from "../../modules/user/slice";
import { isTokenInvalidatedSelector } from "../../modules/user/selectors";
import { notesSelector } from "../../modules/note/selectors";
import MainAppLoader from "../ReusableComponents/MainAppLoader/MainAppLoader.component";

const Main: FC<{}> = () => {
  const dispatch = useDispatch();

  const isTokenInvalid = useSelector(isTokenInvalidatedSelector);
  const { isLoaded } = useSelector(notesSelector);

  useEffect(() => {
    // Retrieve Token saved inside user's localStorage
    const pcSavedToken = loadUserToken();
    dispatch(setToken(pcSavedToken));
    dispatch(getNotes(pcSavedToken));
  }, []);

  return (
    <>
      <MainAppLoader />
      {isLoaded && !isTokenInvalid ? (
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
