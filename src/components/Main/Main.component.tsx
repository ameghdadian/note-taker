import React, { FC } from "react";
import { Container } from "@material-ui/core";
import AppHeader from "../AppHeader/AppHeader.component";
import AppBody from "../AppBody/AppBody.component";
import SignIn from "../SignIn/Signin.component";

const Main: FC<{}> = () => {
  return (
    <>
      {false ? (
        <>
          <AppHeader />
          <Container maxWidth="md">
            <AppBody />
          </Container>
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Main;
