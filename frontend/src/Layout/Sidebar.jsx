import React from "react";
import { FaPenSquare, FaReceipt,  } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-56 h-full border-r border-gray-700 p-4 flex flex-col gap-4 text-gray-300">
      <p className="text-gray-500 font-extrabold text-3xl">TAKE NOTES</p>
      <hr className="border-gray-700" />
      <NavLink
        exact
        to={"/"}
        className="bg-gray-700 hover:bg-gray-600 mx-auto rounded-full flex p-3 items-center gap-2 w-full justify-center font-bold"
      >
        <FaReceipt />
        Show Notes
      </NavLink>
      <NavLink
        to={"/new"}
        className="bg-gray-700 hover:bg-gray-600 mx-auto rounded-full flex p-3 items-center gap-2 w-full justify-center font-bold"
      >
        <FaPenSquare /> Take Notes
      </NavLink>
    </div>
  );
};

export default Sidebar;
