import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/menu",
});

// Get all menu
export const getMenu = () => API.get("/");

// Get single menu
export const getSingleMenu = (id) => API.get(`/${id}`);

// Add menu
export const addMenu = (data) =>
  API.post("/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update menu
export const updateMenu = (id, data) =>
  API.put(`/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Delete menu
export const deleteMenu = (id) => API.delete(`/${id}`);