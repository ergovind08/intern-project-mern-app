import React, { useState } from "react";
import { fetchProducts } from "../api";
import { FiArrowDown, FiSkipBack } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TopBar = ({ onSearch }) => {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetchProducts(name.trim() === "" ? null : name);
      setProducts(response.data);
      setDropdownVisible(true);
      onSearch(response.data);
      navigate("/products");
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleProductSelect = (product) => {
    setName(product.name);
    setDropdownVisible(false);
    onSearch([product]);
    navigate("/products");
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() === "") {
      setDropdownVisible(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center bg-gradient-to-r from-blue-900 to-blue-800 p-4 border-b border-blue-900">
      <motion.button
        type="button"
        className="p-2 text-white bg-neutral-800 rounded-full mb-2 shadow-lg hover:bg-blue-900"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
      >
        <h1> Go Back </h1>
      </motion.button>

      <motion.form
        onSubmit={handleSearch}
        className="flex items-center w-full max-w-xl bg-white rounded-full shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Search products..."
          className="p-3 w-full text-gray-700 bg-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <motion.button
          type="submit"
          className="p-3 text-white bg-blue-600 rounded-full hover:bg-blue-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowDown size={25} />
        </motion.button>
      </motion.form>

      {dropdownVisible && products.length > 0 && (
        <motion.ul
          className="absolute top-full mt-2 w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {products.map((product) => (
            <motion.li
              key={product.id}
              className="p-3 text-gray-700 hover:bg-gray-100 cursor-pointer transition duration-150"
              onClick={() => handleProductSelect(product)}
              whileHover={{ scale: 1.02 }}
            >
              {product.name}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default TopBar;
