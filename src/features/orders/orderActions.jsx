import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../../utils";
import axios from "axios";

export const create_order = createAsyncThunk(
  "order/create_order",
  async ({ token, data }, { getState, rejectWithValue }) => {
    console.log("slide token", token);
    try {
      const response = await axios.post(`${baseurl}/orders/`, data, {
        headers: { Authorization: `Bearer ${token.access_token}` },
      });

      console.log("order response ===>", response.data);
      return response;
    } catch (error) {
      console.error("Error getting slides", error);
      // if (error.response && error.response.data.message) {
      //   return rejectWithValue(error.response.data.message);
      // } else {
      //   return rejectWithValue(error.response.data);
      // }
    }
  }
);
