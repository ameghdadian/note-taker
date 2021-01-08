import React from "react";
import { Typography } from "@material-ui/core";
import { CircularLoader } from "./styled-components";

const NotesList = () => {
  // Render it provided there is some previously added note, at the same time run a loader when it's fetching
  // Return no Previously added note if there is not any.
  return false ? (
    <Typography variant="h6">List Of Previously Added Notes</Typography>
  ) : (
    <CircularLoader />
  );
};

export default NotesList;
