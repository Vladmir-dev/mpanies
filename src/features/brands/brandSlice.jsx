import { createSlice } from "@reduxjs/toolkit";
import { get_brands } from "./brandActions";

const brandSlice = createSlice({
  name: "brands",
  initialState: {
    isLoading: false,
    error: null,
    brands: [],
  },
  extraReducers: (builder) => {
    //get brands
    builder.addCase(get_brands.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_brands.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.status === 200) {
        state.brands = action.payload.data;
      } else {
        alert("Server Error");
      }
    });

    builder.addCase(get_brands.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.data;
    });
  },
});

export default brandSlice.reducer;
