import React, { FC, useState } from "react";
import { CardContent, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  CardWrapper,
  NoteItemTitle,
  NoteItemContent,
  CardActionsGroup,
  IconButtonWrapper,
} from "./styled-components";
import { deleteNote } from "../../../modules/note/asyncActions";
import { useDispatch, useSelector } from "react-redux";
import { tokenSelector } from "../../../modules/user/selectors";

interface INoteItem {
  note: {
    content: string;
    title: string;
  };
  id: string;
}

const NoteItem: FC<INoteItem> = ({ note, id }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const dispatch = useDispatch();

  const token = useSelector(tokenSelector) as string;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget as any);
    setMenuOpen(true);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  const onNoteDeletion = (id: string) => {
    dispatch(deleteNote({ id, token }));
  };

  return (
    <CardWrapper variant="outlined">
      <CardContent>
        <NoteItemTitle variant="h5" color="textSecondary">
          {note.title}
        </NoteItemTitle>
        <NoteItemContent variant="body2" color="textSecondary">
          {note.content}
        </NoteItemContent>
      </CardContent>
      <CardActionsGroup>
        <React.Fragment>
          <IconButtonWrapper onClick={handleClick}>
            <MoreVertIcon />
          </IconButtonWrapper>
          <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={onCloseMenu}
            anchorOrigin={{ vertical: "center", horizontal: "right" }}
            getContentAnchorEl={null}
          >
            <MenuItem
              onClick={() => {
                onCloseMenu();
                onNoteDeletion(id);
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </React.Fragment>
      </CardActionsGroup>
    </CardWrapper>
  );
};

export default NoteItem;
