import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import axios from "axios";
// import {domain, localdomain} from '../../common/helpers/helper'
import image1 from "../../assets/shop-new-4.jpg";
import image2 from "../../assets/shop-new-14.jpg";
import image3 from "../../assets/shop-new-21.jpg";
import image4 from "../../assets/shop-new-22.jpg";
import image5 from "../../assets/shop-new-23.jpg";
import { baseurl } from "../../utils";

export const AllProducts = createAsyncThunk(
  "products/AllProducts",
  async (token, { getState, rejectWithValue }) => {
    console.log("The fetching data", token);

    try {
      const response = await axios.get(`${baseurl}/product`);
      console.log("response ===>", response);

      // console.log("response yeahh", data.data);

      return response.data;
    } catch (error) {
      console.log("The error ===>", error);
      // if (error.response && error.response.data.message) {
      // 	return rejectWithValue(error.response.data.message);
      // } else {
      // 	return rejectWithValue(error.response.data);
      // }
    }
  }
);
