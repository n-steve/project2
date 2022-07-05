import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import Conversion from "./Components/Conversion";
import PipCalculator from "./Components/PipCalculator";

import Home from "./Components/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Conversion />} />
          <Route path="hello" element={<Home />} />
          <Route path="profit" element={<PipCalculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
