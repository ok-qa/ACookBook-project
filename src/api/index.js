import { axiosInstance } from "./axios";
import { authRequests } from "./auth";

export const api = {
  ...authRequests(),
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
