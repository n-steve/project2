import React from "react";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/hello">FrontPage</Link>
      <Link to="/expenses">Convert Currency</Link>
      <Link to="/profit">Manage Profit & Loss</Link>
      <Outlet />
    </div>
  );
}

export default App;
