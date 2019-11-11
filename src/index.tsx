import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App>
      <link
        rel="stylesheet"
        ref="https://fonts.googleapis.com/css?family=Bree+Serif|Raleway:400,600,700&display=swap"
      />
    </App>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
