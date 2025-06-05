import React, { useState } from "react";
import "./Sauces.css";
import ProductForm from "../ProductForm/ProductForm";
import hotImg from "../../Assets/hot.png";
import coldImg from "../../Assets/cold.png";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";


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

const HotOptions = [
    "Hot chilli sauce", "Green chilli sauce", "Siracha", "Gochujang", "Buldak Sauce"
];
const ColdOptions = [
  "Mayonnaise", "Ranch Dressing", "Caesar Dressing", "Balsamic Vinaigrette", "Sour Cream", "Tahini Sauce"
];


function Sauces() {
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
    <div className="sauces-root">
      {/* Navbar */}
      <Breadcrumbs current ="Sauces" />
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
        image={hotImg}
        title="Hot Sauces"
        table="hot-table"
        productOptions={HotOptions}
        quantityLabel="Quantity"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
      <ProductForm
        image={coldImg}
        title="Cold Sauces"
        table="cold-table"
        productOptions={ColdOptions}
        quantityLabel="Quantity :"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
      
    </div>
  );
}

export default Sauces;
