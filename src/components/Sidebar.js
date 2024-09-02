// src/components/Sidebar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div
        className={`flex flex-col h-screen bg-neutral-200 text-black transition-all duration-300 ${
          isCollapsed ? "w-0 overflow-hidden" : "w-64"
        } shadow-lg`}
      >
        <div
          className={`flex flex-col mt-4 ${
            isCollapsed ? "opacity-0 overflow-hidden" : "opacity-100"
          } transition-all duration-300`}
        >
          <h2
            className={`text-lg font-bold text-center ${
              isCollapsed ? "hidden" : ""
            }`}
          ></h2>
          <ul className="flex flex-col items-center mt-4 space-y-2 relative">
            <li
              className={`relative ${
                location.pathname === "/" ? "text-blue-600" : ""
              }`}
            >
              <Link
                to="/"
                className={`block px-4 py-2 rounded hover:bg-gray-300 transition ${
                  isCollapsed ? "text-center" : ""
                }`}
              >
                Dashboard
              </Link>
              {location.pathname === "/" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
              )}
            </li>

            <li
              className={`relative ${
                location.pathname === "/products" ? "text-neutral-600" : ""
              }`}
            >
              <Link
                to="/products"
                className={`block px-4 py-2 rounded hover:bg-gray-300 transition ${
                  isCollapsed ? "text-center" : ""
                }`}
              >
                All Products
              </Link>
              {location.pathname === "/products" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
              )}
            </li>
            <li
              className={`relative ${
                location.pathname === "/new-item" ? "text-blue-600" : ""
              }`}
            >
              <Link
                to="/new-item"
                className={`block px-4 py-2 rounded hover:bg-gray-300 transition ${
                  isCollapsed ? "text-center" : ""
                }`}
              >
                New Item
              </Link>
              {location.pathname === "/new-item" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
              )}
            </li>
          </ul>
        </div>
      </div>

      <button
        className="bg-gray-900  h-200 text-white p-1  focus:outline-none transform transition-transform duration-300"
        onClick={toggleSidebar}
      >
        {isCollapsed ? "->" : "<-"}
      </button>
    </>
  );
};

export default Sidebar;
