import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../utils";


const Config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const get_brands = createAsyncThunk(
  "brands/get_brands",
  async (token, { getState, rejectWithValue, dispatch }) => {
    try {
      // console.log("details in try==>", data);
      const res = await axios.get(`${baseurl}/brand`);

      console.log("get brands response =======>", res.data);

      return res;
    } catch (error) {
      console.log("The delete error", error);
      // if (error.response && error.response.data.error.message) {
      //   return rejectWithValue(error.response.data.error.message);
      // } else {
      //   return rejectWithValue(error.response.data);
      // }
    }
  }
);

