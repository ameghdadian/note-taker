import styled from "styled-components";
import { CircularProgress, Typography } from "@material-ui/core";

export const CircularLoader = styled(CircularProgress)`
  display: block;
  margin: 0 auto;
`;

export const StyledText = styled(Typography)<{ mb1?: boolean }>`
  margin-top: 16px;
  margin-bottom: ${(props) => props.mb1 && 16}px;
`;
