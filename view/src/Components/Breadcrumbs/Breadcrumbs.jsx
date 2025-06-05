import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ current }) {
  // current: string for the current page (e.g., "Dairy", "Spices")

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
      <ol className="breadcrumbs-list">
        <li>
          <Link to="/" className="breadcrumb-link">Home</Link>
        </li>
        <li>
          <span className="breadcrumb-separator">/</span>
          <Link to="/inventory" className="breadcrumb-link">Inventory</Link>
        </li>
        <li>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{current}</span>
        </li>
      </ol>
    </nav>
  );
}
