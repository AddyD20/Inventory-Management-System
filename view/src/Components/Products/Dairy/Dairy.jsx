import React, { useState } from "react";
import "./Dairy.css";
import ProductForm from "../ProductForm/ProductForm";
import milkImg from "../../Assets/milk .png";
import cheeseImg from "../../Assets/cheese.png";
import butterImg from "../../Assets/butter-creame.png";
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

const milkOptions = [
  "Whole Milk", "Skim Milk", "Low Fat Milk", "Flavored Milk", "Organic Milk", "Almond Milk", "Soy Milk", "Oat Milk"
];
const cheeseOptions = [
  "Mozzarella Cheese", "Cheddar Cheese", "Cottage Cheese (Paneer)", "Gouda Cheese", "Parmesan Cheese", "Creme Cheese", "Ricotta Cheese", "Brie Cheese"
];
const butterOptions = [
  "Salted Butter", "Unsalted Butter", "Garlic and Herb Butter", "Heavy Cream", "Whipping Cream"
];

function Dairy() {
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
    <div className="dairy-root">
      {/* Navbar */}
      <Breadcrumbs current="Diary" />
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
        image={milkImg}
        title="Milk Product Form"
        table="milk-table"
        productOptions={milkOptions}
        quantityLabel="Quantity (in ltr):"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
      <ProductForm
        image={cheeseImg}
        title="Cheese Product Form"
        table="cheese-table"
        productOptions={cheeseOptions}
        quantityLabel="Quantity (in blocks):"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
      <ProductForm
        image={butterImg}
        title="Butter/Cream Product Form"
        table="butter-table"
        productOptions={butterOptions}
        quantityLabel="Quantity (in blocks/packets):"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
    </div>
  );
}

export default Dairy;
