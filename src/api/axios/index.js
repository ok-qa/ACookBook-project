import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 1000 * 20,
});
