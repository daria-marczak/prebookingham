import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { palette } from "./palette";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: palette.blueberry
    },
    secondary: {
      main: palette.raspberry
    }
  },
  typography: {
    fontFamily: "Bree Serif, serif, Raleway, sans-serif",
    fontSize: 12
  }
});

theme = responsiveFontSizes(theme);

export default theme;
