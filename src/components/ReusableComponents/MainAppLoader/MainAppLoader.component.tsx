import React, { useState } from "react";
import { LoaderWrapper } from "./styled-components";
import { CircularProgress } from "@material-ui/core";

const MainAppLoader = () => {
  const [isTimeoutDispatched, setIsTimeoutDispatched] = useState(false);
  setTimeout(() => {
    setIsTimeoutDispatched(true);
  }, 1000);
  return (
    <>
      {!isTimeoutDispatched && (
        <LoaderWrapper>
          <CircularProgress />
        </LoaderWrapper>
      )}
    </>
  );
};

export default MainAppLoader;
