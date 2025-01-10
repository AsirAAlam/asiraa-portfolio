import React from "react";
import "./NavBarButton.css";

export default function NavBarButton({ label, href }) {
  return (
    <a href={href}>
      <button className="mybutton bg-gradient-to-r from-sky-600 from-50% to-sky-950 to-50%">
        {label}
      </button>
    </a>
  );
}
