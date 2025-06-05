import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import homepagebg from "./Components/Assets/homepagebg.png";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Inventory from "./Components/Inventory/Inventory";
import Diary from "./Components/Products/Dairy/Dairy";
import Fruit from "./Components/Products/Fruits/Fruits";
import Veggies from "./Components/Products/Vegetables/Veggies";
import Spices from "./Components/Products/Spices/Spices";
import Sauces from "./Components/Products/Sauces/Sauces";
import Flour from "./Components/Products/Flour/Flour";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app-bg">
      {/* Show Navbar only on the home page */}
      {isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/fruits" element={<Fruit />} />
        <Route path ="/veggies" element={<Veggies />} />
        <Route path = "/spices" element={<Spices />} />
        <Route path = "/sauces" element={<Sauces />} />
        <Route path ="/flour" element={<Flour />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
