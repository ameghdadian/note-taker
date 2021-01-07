import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const BodyWrapper = styled(Paper)`
  padding: 16px 24px;
`;

export const FormWrapper = styled(Paper)`
  margin-bottom: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;

  margin-top: 8px;
  margin-right: 8px;
  margin-left: auto;
`;
