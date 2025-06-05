import React, { useState } from "react";
import "./Veggies.css";
import ProductForm from "../ProductForm/ProductForm";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import greenImg from "../../Assets/greens.png";
import rootImg from "../../Assets/roots.png";
import fruitingImg from "../../Assets/fruitingV.png";

// Example backend function:
async function submitDairyProduct(table, formData) {
  const data = { table, ...formData };
  const endpoint = "http://127.0.0.1:3000/submit/";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to submit entry");
  return response.json();
}

const GreenOptions = [
    "Romaine Lettuce", "Spinach", "Cabbage", "Kale", "Fenugreek(methi)"
];
const RootOptions = [
  "potatoes", "Carrots" , "Onions", "Garlic", "Beets", "Ginger", "Turmeric"
];
const FruitingVOptions = [
  "Tomatoes", "Cucumber", "Bell Peppers", "Chilli Peppers", "Squash", "Eggplant(Brinjal)", "Corn", "Brocolli"
];

function Veggies() {
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const handleSuccess = async (table, formData) => {
    await submitDairyProduct(table, formData);
    setAlert({ show: true, type: "success", message: `Product added to ${table} successfully!` });
    setTimeout(() => setAlert({ show: false }), 3000);
  };

  const handleError = (err) => {
    setAlert({ show: true, type: "error", message: err.message || "Submission failed." });
    setTimeout(() => setAlert({ show: false }), 3000);
  };

  return (
    <div className="veggies-root">
      {/* Navbar */}
      <Breadcrumbs current ="Vegetables" />
      <nav className="navbar">
        <div className="navbar-container">
          <h2 className="navbar-heading">EasyManage</h2>
          <div className="nav-right">
            <a href="/" className="nav-link">Home</a>
            <a href="/inventory" className="nav-link">Inventory</a>
            <a href="/contact" className="nav-link">Contact</a>
            <a href="/profile" className="nav-link">Profile</a>
            <a href="/logout" className="nav-link">Logout</a>
          </div>
        </div>
      </nav>

      {alert.show && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}

      <ProductForm
        image={greenImg}
        title="Leafy greens"
        table="green-table"
        productOptions={GreenOptions}
        quantityLabel="Quantity"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
      <ProductForm
        image={rootImg}
        title="Root vegetable Form"
        table="root-table"
        productOptions={RootOptions}
        quantityLabel="Quantity :"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
      <ProductForm
        image={fruitingImg}
        title="Fruiting vegetable Form"
        table="veggies-table"
        productOptions={FruitingVOptions}
        quantityLabel="Quantity :"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
    </div>
  );
}

export default Veggies;
