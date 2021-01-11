import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const FormWrapper = styled(Paper)`
  margin-bottom: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;

  margin-top: 14px;
  margin-right: 14px;
  margin-left: auto;
`;
