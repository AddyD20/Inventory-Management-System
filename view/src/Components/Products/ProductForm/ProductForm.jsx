import React, { useState } from "react";
import "./ProductForm.css";

export default function ProductForm({
  image,
  title,
  table,
  productOptions,
  quantityLabel,
  onSubmitSuccess,
  onSubmitError,
}) {
  const initialFormState = {
    product_name: "",
    quantity: "",
    unit_price: "",
    purchase_date: "",
    expiry_date: "",
  };
  const [form, setForm] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmitSuccess(table, form);
      setForm(initialFormState);
    } catch (err) {
      if (onSubmitError) onSubmitError(err);
    }
    setSubmitting(false);
  };

  return (
    <div className="card-horizontal">
      <div className="card-image">
      {image && <img src={image} alt={title} className="card-img-side" />}
      </div>
      <div className="card-form">
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor={`${table}_product_name`}>Product Type:</label>
            <select
              id={`${table}_product_name`}
              name="product_name"
              value={form.product_name}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a product</option>
              {productOptions.map(opt => (
                <option value={opt} key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor={`${table}_quantity`}>{quantityLabel}</label>
            <input
              type="number"
              id={`${table}_quantity`}
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`${table}_unit_price`}>Unit Price:</label>
            <input
              type="text"
              id={`${table}_unit_price`}
              name="unit_price"
              value={form.unit_price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`${table}_purchase_date`}>Purchase Date:</label>
            <input
              type="date"
              id={`${table}_purchase_date`}
              name="purchase_date"
              value={form.purchase_date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`${table}_expiry_date`}>Expiry Date:</label>
            <input
              type="date"
              id={`${table}_expiry_date`}
              name="expiry_date"
              value={form.expiry_date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
