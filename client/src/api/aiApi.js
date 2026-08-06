import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/ai",
});

export const askAI = (question) =>
  API.post("/recommend", {
    question,
  });