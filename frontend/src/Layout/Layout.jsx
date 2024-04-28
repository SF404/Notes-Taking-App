import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div className="w-full h-screen flex bg-gray-800 font-poppians">
      <Sidebar />
      <div className="flex-1 p-4 overflow-y-auto">
        <ToastContainer hideProgressBar={true} autoClose={2000}/>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
