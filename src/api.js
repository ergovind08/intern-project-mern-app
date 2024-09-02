// src/api.js
import axios from "axios";
const API_URL = "http://localhost:8080";
export const fetchProducts = () => axios.get(`${API_URL}/api/products`);

// export const fetchCategories = () => axios.get(`${API_URL}/api/categories`);

// export const fetchLocations = () => axios.get(`${API_URL}/api/locations`);

export const submitRequest = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/requests`, data);
    return response.data;
  } catch (error) {
    console.error("Error submitting request:");
  }
};
