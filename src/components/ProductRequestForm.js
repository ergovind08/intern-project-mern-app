import React, { useState } from "react";
import { submitRequest } from "../api";

const ProductRequestForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [category, setCategory] = useState(""); // Integer input
  const [brand, setBrand] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  // Define categories with IDs
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Furniture" },
    { id: 3, name: "Clothing" },
    { id: 4, name: "Books" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const categoryId = parseInt(category);

    const requestData = {
      name,
      description,
      price: parseFloat(price),
      stock_quantity: parseInt(stockQuantity),
      category_id: categoryId,
      brand,
      image_url: imageUrl,
      created_at: createdAt,
    };

    console.log("Submitting data:", requestData);

    try {
      await submitRequest(requestData);
      alert("Product submitted successfully!");
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Error submitting product.");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-center text-2xl font-bold mb-4">
          New Product Request
        </h1>
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Price:</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Stock Quantity:</label>
          <input
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Category ID:</label>
          <input
            type="number"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
          <small className="text-gray-500">
            Enter the category ID (e.g., 1 for Electronics).
          </small>
        </div>
        <div>
          <label className="block text-gray-700">Brand:</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Created At:</label>
          <input
            type="date"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 focus:outline-none"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default ProductRequestForm;
