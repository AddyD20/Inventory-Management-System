import React, { useState } from "react";
import "./Fruits.css";
import ProductForm from "../ProductForm/ProductForm";
import BerryImg from "../../Assets/Berries.png";
import TropicalImg from "../../Assets/tropicalfruit.png";
import CitrusImg from "../../Assets/citrus.png";
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

const BerriesOptions = [
   "Stawberry" , "Blueberry", "Blackberry" , "Cherry" , "Raspberry", "Mulberry", "Cranberry"
];
const TropicalOptions = [
  "Mango" , "Pineapple", "Bananas" , "Kiwi" , "Dragon Fruit", "Passion Fruit", "Avacado"
];
const CitrusOptions = [
  "Lemons", "Oranges", "Limes"
];

function Fruit() {
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
    <div className="fruit-root">
      {/* Navbar */}
      <Breadcrumbs current ="Fruits" />
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
        image={BerryImg}
        title="Berry Fruits"
        table="berry-table"
        productOptions={BerriesOptions}
        quantityLabel="Quantity"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
      <ProductForm
        image={TropicalImg}
        title="Tropical Fruit Form"
        table="tropical-table"
        productOptions={TropicalOptions}
        quantityLabel="Quantity :"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
      <ProductForm
        image={CitrusImg}
        title="Citrus Fruits Form"
        table="citrus-table"
        productOptions={CitrusOptions}
        quantityLabel="Quantity :"
        onSubmitSuccess={handleSuccess}
        onSubmitError={handleError}
      />
    </div>
  );
}

export default Fruit;
