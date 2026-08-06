import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/messages`,
});

// Send Message
export const sendMessage = (data) => API.post("/", data);

// Get All Messages
export const getMessages = () => API.get("/");

// Delete Message
export const deleteMessage = (id) => API.delete(`/${id}`);