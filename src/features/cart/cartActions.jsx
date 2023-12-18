import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import {domain, localdomain} from '../../common/helpers/helper'


export const add_to_cart = createAsyncThunk(
  "cart/add_to_cart",
  async (data, { getState, rejectWithValue }) => {
    try {
      console.log("added product", data);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const decrease_qty = createAsyncThunk(
  "cart/decrease_qty",
  async (data, { getState, rejectWithValue }) => {
    // console.log("product ==>", product);
    try {
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

