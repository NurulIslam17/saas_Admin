import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[20%_80%]">
        <Sidebar />

        <div className="main p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
