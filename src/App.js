import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppRouter from "./Router";
import "./style.css";
const App = () => (
  <MuiThemeProvider>
    <AppRouter />
  </MuiThemeProvider>
);
render(<App />, document.getElementById("app"));
