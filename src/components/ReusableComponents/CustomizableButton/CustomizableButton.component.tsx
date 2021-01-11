import React, { FC } from "react";
import { StyledButton } from "./styled-components";
import { ButtonProps } from "@material-ui/core/Button";

const CustomizableButton: FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default CustomizableButton;
