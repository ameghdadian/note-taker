import styled from "styled-components";
import { Card, Typography, CardActions, IconButton } from "@material-ui/core";

export const CardWrapper = styled(Card)`
  margin-bottom: 8px;
`;

export const NoteItemTitle = styled(Typography)``;

export const NoteItemContent = styled(Typography)`
  text-align: left;
  margin-top: 16px;
`;

export const CardActionsGroup = styled(CardActions)``;

export const IconButtonWrapper = styled(IconButton)`
  display: inline-block;
  margin-left: auto;
`;
