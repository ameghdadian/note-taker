import React from "react";
import { Toolbar } from "@material-ui/core";
import { Header, MainHeading } from "./styled-components";

const AppHeader = () => (
  <Header>
    <Toolbar>
      <MainHeading variant="h5">Note Manager</MainHeading>
    </Toolbar>
  </Header>
);

export default AppHeader;
