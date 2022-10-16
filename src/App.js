import "./App.css";
import CardStore from "./Card-store";
import Nav from "./components/Nav";
import Products from "./components/Products";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cardStore" element={<CardStore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
