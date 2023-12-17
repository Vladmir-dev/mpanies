import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../../utils";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "slides/fetchCategories",
  async (token, { getState, rejectWithValue }) => {
    console.log("slide token", token);
    try {
      const response = await axios.get(`${baseurl}/category`);

    //   console.log("slides response ===>", response.data);
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
