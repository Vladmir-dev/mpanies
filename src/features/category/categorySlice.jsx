import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoryActions";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    is_loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.is_loading = true;
      state.error = null;
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.is_loading = false;

      if (action.payload.status === 200) {
        state.categories = action.payload.data;
      }
    });

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.is_loading = false;
      state.error = action.payload;
    });
  },
});

export default categorySlice.reducer;
