import { axiosInstance } from "./axios";

export const homeRequests = () => {
  const homePrefix = "home/";

  return {
    getAreasRequest: async () =>
      axiosInstance.request({
        method: "GET",
        url: `${homePrefix}areas`,
      }),
    getCategoriesRequest: async () =>
      axiosInstance.request({
        method: "GET",
        url: `${homePrefix}categories`,
      }),
  };
};
