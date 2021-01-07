import React from "react";
import Main from "./components/Main/Main.component";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
 }
 .App {
   text-align: center;
 }
`;
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
