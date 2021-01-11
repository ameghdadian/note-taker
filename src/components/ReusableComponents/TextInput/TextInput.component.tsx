import React, { FC } from "react";
import { InputElement } from "./styled-component";
import { TextFieldProps } from "@material-ui/core/TextField";

const TextInput: FC<TextFieldProps> = (props) => {
  return <InputElement {...props} />;
};

export default TextInput;
