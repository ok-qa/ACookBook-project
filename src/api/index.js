import { axiosInstance } from "./axios";
import { authRequests } from "./auth";
import { homeRequests } from "./home";

export const api = {
  ...authRequests(),
  ...homeRequests(),
  getBaseURL: () => axiosInstance.defaults.baseURL,
  setAuthHeader: (token) =>
    (axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`),
  getAuthHeader: () => axiosInstance.defaults.headers.common["Authorization"],
  clearAuthHeader: () => {
    delete axiosInstance.defaults.headers.common["Authorization"];
  },
};
