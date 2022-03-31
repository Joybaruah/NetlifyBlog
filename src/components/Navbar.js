import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ backgroundColor: "#146e00" }}>
        <div className="container-fluid">
          <a className="navbar-brand" style={{ fontWeight: "700", fontFamily: "'Montserrat', sans-serif" }} href="/">
            Joy Baruah
          </a>
        </div>
      </nav>
    </div>
  );
}
