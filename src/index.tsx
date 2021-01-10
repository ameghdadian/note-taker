import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, StylesProvider } from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { store } from "./store";
import theme from "./theming/theme";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </StyledThemeProvider>
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
