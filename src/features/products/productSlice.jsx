import { createSlice } from "@reduxjs/toolkit";
import { AllProducts } from "./productActions";

const initialState = {
    is_loading: false,
    error: false,
    products: [],
    // currency:"UGX"
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //flash deals
        builder.addCase(AllProducts.pending, (state) => {
            state.is_loading = true;
            state.error = false;
        });

        builder.addCase(AllProducts.fulfilled, (state, action) => {
            // console.log("payload ==>", action.payload)
            state.is_loading = false;
            if(action.payload.status === 200 || action.payload.status === "200"){
                state.products = action.payload.data
            }else{
                console.log("error", action.payload)
            }
            // state.products = action.payload;
        });

        builder.addCase(AllProducts.rejected, (state, action) => {
            state.is_loading = false;
            state.error = action.payload;
        });
    },
});

// export const {} = productsSlice.actions;
export default productsSlice.reducer;