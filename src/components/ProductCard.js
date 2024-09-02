import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-4 max-w-lg mx-auto">
      <img
        src={product.image_url} // Adjusted to use product.image_url
        alt={product.name}
        className="w-60 h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-sm font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-green-600 font-semibold">Price: {product.price}</p>
        <p className="text-gray-500">Brand: {product.brand}</p>
      </div>
    </div>
  );
};

export default ProductCard;
