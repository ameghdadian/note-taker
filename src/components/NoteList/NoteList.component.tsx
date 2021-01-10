import React, { FC } from "react";
import { NoteListWrapper } from "./styled-components";

const NoteList: FC<{}> = ({ children }) => (
  <NoteListWrapper elevation={3}>{children}</NoteListWrapper>
);

export default NoteList;
