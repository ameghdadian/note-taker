import React, { FC } from "react";
import { InputElement } from "./styled-component";
import { TextFieldProps } from "@material-ui/core/TextField";

// interface ITextInput {
//   id?: string;
//   size?: string;
//   fullWidth?: boolean;
//   multiline?: boolean;
//   rows?: number;
//   variant?: string;
//   placeholder?: string;
// }

const TextInput: FC<TextFieldProps> = (props) => {
  return <InputElement {...props} />;
};

export default TextInput;
