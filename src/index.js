import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Plant from "./Components/Plant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/succulents" element={<Plant plant="succulents" plantName="Succulents"></Plant>}/>
    <Route path="/ferns" element={<Plant plant="ferns" plantName="Ferns"></Plant>}></Route>
    <Route path="/pothos" element={<Plant plant="pothos" plantName="Pothos"></Plant>}></Route>
  </Routes>
  
  </BrowserRouter>


);

reportWebVitals();