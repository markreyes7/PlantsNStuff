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
    <Route path="/ferns" element={<Plant plant="ferns" plantName="Ferns" plantDescription="Consisting of around 12,000 different species, existing for over 300 million years ,ferns establish themselves as some of the most unique houseplants you can bring to your home. Being that there are so many different species, each individual speicies must be approached individually in order to properly cater to it's needs. Well we're here to help!"></Plant>}></Route>
    <Route path="/pothos" element={<Plant plant="pothos" plantName="Pothos"></Plant>}></Route>
  </Routes>
  
  </BrowserRouter>


);

reportWebVitals();