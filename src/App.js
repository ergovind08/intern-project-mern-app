// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import ProductRequestForm from "./components/ProductRequestForm";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopBar onSearch={handleSearch} />
          <div className="p-4 flex-1 overflow-y-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<h1>Welcome to the dashboard</h1>} />
              <Route
                path="/products"
                element={<Products searchResults={searchResults} />}
              />
              <Route path="/new-item" element={<ProductRequestForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
