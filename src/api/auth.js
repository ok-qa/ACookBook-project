import { axiosInstance } from "./axios";

export const authRequests = () => {
  const authPrefix = "auth/";

  return {
    signUpRequest: async (data) =>
      axiosInstance.request({
        method: "POST",
        url: `${authPrefix}register`,
        data,
      }),
    loginRequest: async (data) =>
      axiosInstance.request({
        method: "POST",
        url: `${authPrefix}login`,
        data,
      }),
  };
};
