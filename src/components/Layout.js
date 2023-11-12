// Importing the Outlet component from the "react-router-dom" library.
import { Outlet } from "react-router-dom";
import React from "react";

// Defining a functional component called Layout.
function Layout() {

  // The component returns a main element containing the Outlet component.
  return (
    <main>
      <Outlet />
    </main>
  );
}

// Exporting the Layout component as the default export of this module.
export default Layout;