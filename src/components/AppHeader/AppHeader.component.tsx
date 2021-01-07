import React from "react";
import { Toolbar } from "@material-ui/core";
import { Header, MainHeading } from "./styled-components";

const AppHeader = () => (
  <Header>
    <Toolbar>
      <MainHeading variant="h6">Sticky Note</MainHeading>
    </Toolbar>
  </Header>
);

export default AppHeader;
