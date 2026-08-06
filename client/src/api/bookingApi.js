import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/bookings`,
});

// Create Booking
export const createBooking = (data) => API.post("/", data);

// Get All Bookings
export const getBookings = () => API.get("/");

// Update Booking Status
export const updateBooking = (id, data) =>
  API.put(`/${id}`, data);

// Delete Booking
export const deleteBooking = (id) =>
  API.delete(`/${id}`);