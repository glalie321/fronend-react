import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Menu from './Menu';
import Sobre from "./Sobre";
import Component1 from "./Component1";
import "./index.css"
import Usuarios from './Usuarios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="usuarios" element={<Component1 />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="pessoas" element ={<Usuarios/>}/>  
    </Routes>
  </BrowserRouter>
);  