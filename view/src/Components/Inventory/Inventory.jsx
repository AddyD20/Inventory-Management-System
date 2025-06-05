import React, { useState } from "react";
import "./Inventory.css";
import dairyImg from "../Assets/dariy.png";
import vegetableImg from "../Assets/vegetable.png";
import saucesImg from "../Assets/sauces.png";
import fruitsImg from "../Assets/fruits.png";
import spicesImg from "../Assets/spices.png";
import flour from "../Assets/flourr.png";

const sidebarData = [
  {
    title: "Dairy",
    items: ["Milk", "Cheese", "Creame"],
  },
  {
    title: "Vegetables",
    items: ["Tomatoes", "Onions", "Capsicum"],
  },
  {
    title: "Sauces",
    items: ["Red Sauce Base", "Green Sauce Base", "White Sauce Base"],
  },
  {
    title: "Spices",
    items: ["Oregano", "Chilli flakes", "Peri Peri Seasoning"],
  },
  {
    title: "Fruits",
    items: ["Strawberry", "Blueberry", "Avocado"],
  },
  {
    title: "Flours",
    items: ["Whole wheat", "All purpose flours", "Multigrain flours", "Ragi flours"],
  },
];

const cards = [
  {
    img: dairyImg,
    title: "Dairy",
    text: "Manage your dairy products",
    link: "/diary",
    btnText: "Manage",
  },
  {
    img: vegetableImg,
    title: "Vegetables",
    text: "Veggiess. Manage your vegetables",
    link: "/veggies",
    btnText: "Manage",
  },
  {
    img: saucesImg,
    title: "Sauces",
    text: "Sauce it up!! . Manage your sauces.",
    link: "/sauces",
    btnText: "Manage",
  },
  {
    img: fruitsImg,
    title: "Fruits",
    text: "Fruits everywhere. Manage your fruits.",
    link: "/fruits",
    btnText: "Manage",
  },
  {
    img: spicesImg,
    title: "Spices",
    text: "Spice it up !! . Manage the spices",
    link: "/spices",
    btnText: "Manage",
  },
  {
    img: flour,
    title: "Flour",
    text: "Flour everywhere. Manage flours",
    link: "/flour",
    btnText: "Manage",

  },
];

function Inventory() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="inventory-root">
      {/* Sidebar */}
      <aside className={`sidebar${sidebarOpen ? " open" : ""}`} id="sidebar">
        <div className="logo">
          
        </div>
        <nav>
          <ul>
            {sidebarData.map((cat, idx) => (
              <li className="dropdown" key={cat.title}>
                <span>{cat.title}</span>
                <ul className="dropdown-content">
                  {cat.items.map(item => (
                    <li key={item}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <button
            className="toggle-button"
            id="toggleSidebar"
            onClick={() => setSidebarOpen(open => !open)}
          >
            ☰
          </button>
          <h2 className="navbar-heading">EasyManage</h2>
          <div className="nav-right">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
            <a href="#" className="nav-link">Profile</a>
            <a href="#" className="nav-link">Logout</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className={`main-content${sidebarOpen ? " open" : ""}`}>
        <div className="content">
          <div className="flex">
            {cards.map(card => (
              <div className="dashboard" key={card.title}>
                <div className="card" style={{ width: "23rem"}}>
                  <img src={card.img} className="card-img-top" alt={card.title} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <a href={card.link} className="btn custom-btn">
                      {card.btnText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Inventory;
