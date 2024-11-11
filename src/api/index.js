import { axiosInstance } from "./axios";
import { authRequests } from "./auth";

export const api = {
  ...authRequests(),
  getBaseURL: () => axiosInstance.defaults.baseURL,
};
