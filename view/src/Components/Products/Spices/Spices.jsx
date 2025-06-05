import React, { useState } from "react";
import "./Spices.css";
import ProductForm from "../ProductForm/ProductForm";
import pungent from "../../Assets/Pungent.png";
import aromatic from "../../Assets/aromatic.png";
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

const PungentOptions = [
    "Black Pepper", "Chilli Peppers", "Mustard Seeds", "Wasabi"
];
const AromaticOptions = [
 "Cinnamon", "Cloves", "Nutmeg", "Cumin", "Saffron","Cardamom", "Peprika"
];


function Spices() {
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
    <div className="spices-root">
      {/* Navbar */}
      <Breadcrumbs current ="Spices" />
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
        image={pungent}
        title="Pungent-spices"
        table="pungent-table"
        productOptions={PungentOptions}
        quantityLabel="Quantity"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
      <ProductForm
        image={aromatic}
        title="Aromatic Spices Form"
        table="aromatic-table"
        productOptions={AromaticOptions}
        quantityLabel="Quantity :"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
    </div>
  );
}

export default Spices;
