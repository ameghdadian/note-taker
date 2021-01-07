import React, { FC } from "react";
import { Container } from "@material-ui/core";
import AppHeader from "../AppHeader/AppHeader.component";
import AppBody from "../AppBody/AppBody.component";

const Main: FC<{}> = () => {
  return (
    <>
      <AppHeader />
      <Container maxWidth="md">
        <AppBody />
      </Container>
    </>
  );
};

export default Main;
