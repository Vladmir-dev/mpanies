import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../../utils";

export const fetchSlides = createAsyncThunk(
  "slides/fetchSlides",
  async ({ getState, rejectWithValue }) => {
    const response = await axios.get(`${baseurl}/slide`);
    console.log("response ===>", response);
    try {
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);
