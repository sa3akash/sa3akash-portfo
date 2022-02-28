import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Alert from "./Components/Alert";

ReactDOM.render(
  <React.StrictMode>
    <Alert />
    <Header />
    <MainContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
