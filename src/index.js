import { StrictMode } from "react";
import ReactDOM from "react-dom";

import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="contenedor--general">
      <div className="plantilla">
        <Navbar />
        <MainContent />
        <Hero />
        <Card />
      </div>
    </div>
  </StrictMode>,
  rootElement
);
