import { api } from "../api";

export const requestSignIn = async (formData) => {
  const { data } = await api.loginRequest(formData);
  api.setAuthHeader(data.data.accessToken);
  return data;
};

export const requestRecipes = async (pageParams, filters) => {
  const { page = 1, perPage = 6 } = pageParams;
  const { areaId, categoryIds, cookingTime } = filters;
  const query = new URLSearchParams({ page, perPage });
  if (areaId) {
    query.append("areaId", areaId);
  }
  if (categoryIds) {
    categoryIds.map((categoryId) => {
      query.append("categoryIds", categoryId);
    });
  }
  if (cookingTime) {
    query.append("cookingTime", cookingTime);
  }

  const {
    data: { data },
  } = await api.getRecipesRequest(query.toString());

  return data;
};
