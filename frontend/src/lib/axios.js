import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-dwwo.onrender.com/api",
  withCredentials: true,
});