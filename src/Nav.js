import React from "react";
import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
  <div>
      
      <Link className="item" to="/Home">
        Main Page
      </Link>
      <Link className="item" to="/Conversion">
        Convert Currency
      </Link>
      <Link className="item" to="/profit">
        Manage Profit & Loss
      </Link>
      <Outlet />
    </div>
  );
}

export default Nav;
