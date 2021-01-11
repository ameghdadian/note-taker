import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  TextField,
  Typography,
  Container,
  CssBaseline,
} from "@material-ui/core";
import CustomizableButton from "../CustomizableButton/CustomizableButton.component";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./styled-components";
import { getCredentials } from "../../../modules/user/asyncActions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = (event: any) => {
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
    }
  };

  const handleFormSubmission = (event: React.FormEvent) => {
    event.preventDefault();
    if (email.length && password.length) {
      dispatch(getCredentials({ email, password }));
    } else {
      console.log("Input must not be left empty");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleFormSubmission}
        >
          <TextField
            variant="outlined"
            margin="normal"
            value={email}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            value={password}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <CustomizableButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </CustomizableButton>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
