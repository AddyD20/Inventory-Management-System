import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // For hover effect on nav links
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navLinks = [
    { name: "Inventory", path: "/inventory" },
    { name: "Marketting Oversights", path: "#" },
    { name: "Menu", path: "#" },
    { name: "Recommendations", path: "#" },
  ];

  return (
    <div className="container" style={{ position: "relative", zIndex: 3 }}>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-cloud-moon-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z" />
            <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />
          </svg>
          <span id="heading"> EasyManage </span>
        </Link>
        <ul className="nav nav-pills">
          {navLinks.map((link, idx) => (
            <li className="nav-item" key={link.name}>
              <Link
                to={link.path}
                className="nav-link"
                style={{
                  color: hoveredIndex === idx ? "#D14D72" : "#921A40",
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
