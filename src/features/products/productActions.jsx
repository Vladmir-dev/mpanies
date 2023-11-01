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
	  console.log("response ===>", response)
      const data = [
        {
          id: 1,
          name: "Luke Moisturizing",
          image1: image1,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 2,
          name: "Luke Moisturizing",
          image1: image2,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 3,
          name: "Luke Moisturizing",
          image1: image3,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 4,
          name: "Luke Moisturizing",
          image1: image4,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 5,
          name: "Luke Moisturizing",
          image1: image5,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 6,
          name: "Luke Moisturizing",
          image1: image1,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 7,
          name: "Luke Moisturizing",
          image1: image2,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 8,
          name: "Luke Moisturizing",
          image1: image3,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 9,
          name: "Luke Moisturizing",
          image1: image4,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 10,
          name: "Luke Moisturizing",
          image1: image5,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 11,
          name: "Luke Moisturizing",
          image1: image1,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 12,
          name: "Luke Moisturizing",
          image1: image2,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 13,
          name: "Luke Moisturizing",
          image1: image3,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 14,
          name: "Luke Moisturizing",
          image1: image4,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 15,
          name: "Luke Moisturizing",
          image1: image5,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 17,
          name: "Luke Moisturizing",
          image1: image1,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 18,
          name: "Luke Moisturizing",
          image1: image2,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 19,
          name: "Luke Moisturizing",
          image1: image3,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 20,
          name: "Luke Moisturizing",
          image1: image4,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
        {
          id: 21,
          name: "Luke Moisturizing",
          image1: image5,
          image2: "",
          price: "7.50",
          discount: "2%",
        },
      ];
      // const response = await axios.get(
      //   `${baseurl}/products/flash-deals`,
      //   Config
      // );
      console.log("response yeahh", data.data);

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
