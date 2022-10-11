import "./App.css";
import { Fragment } from "react";
import { ThemeProvider } from "@mui/material";
import theme from './themeConfig'
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Navbar />
        <ItemListContainer msg="Bienvenido"/>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
