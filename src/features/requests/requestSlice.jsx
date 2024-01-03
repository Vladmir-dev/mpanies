import { createSlice } from "@reduxjs/toolkit";
import { create_request } from "./requestAction";

const initialState = {
  is_loading: false,
  error: false,
  // products: [],
  // currency:"UGX"
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //flash deals
    builder.addCase(create_request.pending, (state) => {
      state.is_loading = true;
      state.error = false;
    });

    builder.addCase(create_request.fulfilled, (state, action) => {
      // console.log("payload ==>", action.payload)
      state.is_loading = false;
      if (action.payload.status === 201) {
        alert("Request sent successfully");
      } else {
        alert("Something went wrong, please try again later");
      }
    });

    builder.addCase(create_request.rejected, (state, action) => {
      state.is_loading = false;
      state.error = action.payload;
    });
  },
});

// export const {} = productsSlice.actions;
export default requestSlice.reducer;
