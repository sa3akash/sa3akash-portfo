import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    
    <Header />
    <MainContainer />

  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
