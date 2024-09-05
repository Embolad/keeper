import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import Map, { Keeper2 } from './Map';
import App from "./App";
import Contact from "./Contact";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Keeper from "./completeproject/Keeper";
// completeproject
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Keeper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Map />} />
        <Route path="/keeper" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
