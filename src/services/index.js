import { api } from "../api";

export const requestSignIn = async (formData) => {
  const { data } = await api.loginRequest(formData);
  api.setAuthHeader(data.data.accessToken);
  return data;
};
