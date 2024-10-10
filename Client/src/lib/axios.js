import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5505/api",
  withCredentials: true,
});
