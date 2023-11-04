import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetch_results = createAsyncThunk(
    "search/fetch_results",
    async (data, { getState, rejectWithValue }) => {
      // console.log("data ==>", data);
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