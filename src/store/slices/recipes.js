import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    areaId: null,
    categoryIds: null,
    cookingTime: null,
  },
  data: null,
  isLoading: false,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setAreaId: (state, action) => {
      state.filters.areaId = action.payload;
    },
    setCategoryIds: (state, action) => {
      state.filters.categoryIds = action.payload;
    },
    setCookingTime: (state, action) => {
      state.filters.cookingTime = action.payload;
    },
    setRecipes: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAreaId, setCategoryIds, setCookingTime, setRecipes } =
  recipesSlice.actions;

export default recipesSlice.reducer;
