import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Projetos } from "./Pages/Projetos";
import { SobreMim } from "./Pages/My";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobreMim" element={<SobreMim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
