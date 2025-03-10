import { Link, useLocation } from "react-router";

import "./NavBarButton.css";

export default function NavBarButton({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
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
        className="bg-sky-950"
        style={{
          height: "0.1em",
          opacity: isCurrent ? 1 : 0,
          transition: "opacity 0.3s",
          // backgroundColor: 'green'
        }}
      />
    </Link>
  );
}
