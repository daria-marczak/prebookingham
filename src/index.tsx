import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import App from "./App";

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
