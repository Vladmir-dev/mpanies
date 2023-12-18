import { createSlice } from "@reduxjs/toolkit";
import { create_order } from "./orderActions";
// import { reset } from "../cart/cartSlice";
// import { useDispatch } from "react-redux";

// const dispatch = useDispatch();

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    is_loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(create_order.pending, (state) => {
      state.is_loading = true;
      state.error = null;
    });

    builder.addCase(create_order.fulfilled, (state, action) => {
      state.is_loading = false;

      if (action.payload.status === 201 || action.payload.status === 200) {
        // dispatch(reset());
        alert("Order created succesfully, proceed to payment");
      } else {
        alert("Server Error");
      }
    });

    builder.addCase(create_order.rejected, (state, action) => {
      state.is_loading = false;
      state.error = action.payload;
    });
  },
});

export default orderSlice.reducer;
