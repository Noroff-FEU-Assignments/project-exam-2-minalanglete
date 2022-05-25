import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [style, setStyle] = useState("navbar1");

  const changeClass = (e) => {
    if (style == "navbar1") {
      setStyle("navbar_change");
    } else if (style == "navbar_change") {
      setStyle("navbar1");
    }
  };

  return (
    <div className="navbar">
      <div className="navbarmobile">
        <div className="logomobil">Holidaze</div>
        <div className="svg1" onClick={changeClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
      <div className={style}>
        <div className="navbar2">
          <div className="logo">Holidaze</div>

          <Link className="navbar3" href="/">
            <a className="navbar3">Home</a>
          </Link>
          <Link className="navbar3" href="/hotels">
            <a className="navbar3">Hotels</a>
          </Link>
          <Link className="navbar3" href="/enquiry">
            <a className="navbar3">Enquiry to a hotel</a>
          </Link>
          <Link className="navbar3" href="/contact">
            <a className="navbar3">Contact</a>
          </Link>
          <Link className="navbar3" href="/login">
            <a className="navbar3">Admin</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
