import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top " style={{background: "hsl(219, 100%, 97%)" }}>
        <div className="container-fluid">
          <a className="navbar-brand" style={{ fontWeight: "700", fontFamily: "'Montserrat', sans-serif" }} href="/">
            JOY BARUAH
          </a>
        </div>
      </nav>
    </div>
  );
}
