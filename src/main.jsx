import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Dataprovider from "./context/Dataprovider.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dataprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Dataprovider>
  </React.StrictMode>
);
