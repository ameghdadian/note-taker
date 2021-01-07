import React, { FC } from "react";
import { StyledButton } from "./styled-component";
import { ButtonProps } from "@material-ui/core/Button";

const CustomizableButton: FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default CustomizableButton;
