import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { PetaProvider } from "./context/PetaContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PetaProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </PetaProvider>
  </React.StrictMode>
);
