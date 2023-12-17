import { createSlice } from "@reduxjs/toolkit";
import { fetchSlides } from "./SlideActions";

const slideSlice = createSlice({
  name: "slide",
  initialState: {
    slides: [],
    is_loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSlides.pending, (state) => {
      state.is_loading = true;
      state.error = null;
    });

    builder.addCase(fetchSlides.fulfilled, (state, action) => {
      state.is_loading = false;

      if (action.payload.status === 200) {
        state.slides = action.payload.data;
      }
    });

    builder.addCase(fetchSlides.rejected, (state, action) => {
      state.is_loading = false;
      state.error = action.payload;
    });
  },
});

export default slideSlice.reducer;
