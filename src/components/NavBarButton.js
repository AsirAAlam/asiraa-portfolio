import React from "react";
import { Link, useLocation } from "react-router";

import "./NavBarButton.css";

export default function NavBarButton({ label, href }) {
  const location = useLocation();

  let isCurrent = location.pathname === href;

  return (
    <Link to={href}>
      <button
        className={
          "mybutton bg-gradient-to-r from-sky-600 from-50% to-sky-950 to-50%"
        }
      >
        {label}
      </button>

      <div
        className="bg-sky-900"
        style={{
          height: "0.2em",
          width: "100%",
          borderRadius: 10,
          display: isCurrent ? "block" : "none",
          transition: "all 0.7s",
        }}
      />
    </Link>
  );
}
