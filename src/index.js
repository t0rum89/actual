import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import "./i18n";

import App from "./App";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <>
    <Global />
    {/* <I18nextProvider i18n={i18next}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </I18nextProvider> */}
  </>,
  document.getElementById("root")
);
