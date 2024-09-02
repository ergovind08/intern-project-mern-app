import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api";
import ProductCard from "./ProductCard";

const Products = ({ searchResults }) => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // Number of products to display initially

  useEffect(() => {
    if (searchResults.length > 0) {
      setProducts(searchResults);
    } else {
      const fetchAllProducts = async () => {
        try {
          const response = await fetchProducts("");
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching all products:", error);
        }
      };

      fetchAllProducts();
    }
  }, [searchResults]);

  const handleClick = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const displayedProducts = products.slice(0, visibleCount);

  return (
    <div>
      <h1 className="text-2xl text-center text-green-600 mb-6">
        {searchResults.length > 0 ? "Filtered Products" : "All Products"}
      </h1>
      <div className="flex flex-wrap justify-center">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {products.length > visibleCount && (
        <div className="text-center mt-6">
          <button
            onClick={handleClick}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
