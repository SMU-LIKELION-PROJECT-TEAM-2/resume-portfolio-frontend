import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { Global, css } from "@emotion/react";

const GlobalStyle = css`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;
function App() {
  return (
    <BrowserRouter>
      <Global styles={GlobalStyle} />
      <Router />
    </BrowserRouter>
  );
}

export default App;
