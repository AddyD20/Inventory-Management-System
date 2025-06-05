import React, { useState } from "react";
import "./Flour.css";
import ProductForm from "../ProductForm/ProductForm";
import glutenImg from "../../Assets/gluten.png";
import glutenfreeImg from "../../Assets/glutenfree.png";
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

const GlutenOptions = [
   "All-purpose-flour(maida)" , "Whole Wheat Flour", "Durum Wheat Flour (Semolina)", 
];
const GlutenFreeOptions = [
  "Rice flour", "Corn Flour", "Almond Flour", "Oat Flour", "Chickpea Flour", "Millet Flour", "Tapioca Flour"
];


function Flour() {
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
    <div className="flour-root">
      {/* Navbar */}
      <Breadcrumbs current ="Flour" />
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
        image={glutenImg}
        title="Gluten-Containing Flours"
        table="gluten-table"
        productOptions={GlutenOptions}
        quantityLabel="Quantity"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
      <ProductForm
        image={glutenfreeImg}
        title="Gluten-Free Flours"
        table="gluten-free-table"
        productOptions={GlutenFreeOptions}
        quantityLabel="Quantity :"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
      
    </div>
  );
}

export default Flour;
