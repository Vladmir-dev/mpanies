import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {domain, localdomain} from '../../common/helpers/helper'


export const otp = createAsyncThunk(
  "auth/otp",
  async (code, { getState, rejectWithValue, dispatch }) => {
    // console.log("login details ===>", code);
    console.log("code ===>", code)
    try {
      // console.log("login details ===>", code);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.post(
        `${baseurl}/auth/confirm/${code}`,
        Config
      );
      //  navigate("/")
      console.log("response =====>", response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);



export const login = createAsyncThunk(
  "auth/login",
  async (loginDetails, { getState, rejectWithValue, dispatch }) => {
    console.log("login details ===>", loginDetails);
    // console.log("login details ===>", kenageApi)
    try {
      console.log("login details ===>", loginDetails);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.post(
        `${baseurl}/auth/login`,
        loginDetails,
        Config
      );
      //  navigate("/")
      console.log("response =====>", response.data);
      return response.data;
    } catch (error) {
      console.log("This is the error ===>", error.response.data.error.message);
      if (error.response && error.response.data.error.message) {
        // console.log("This is the error ===>", error);
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);


export const get_user = createAsyncThunk(
  "auth/get_user",
  async (token, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);
    
    try {
      // console.log("login details ===>", token.token);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.get(
        `${baseurl}/auth/me`,
        {
          headers: { Authorization: `Bearer ${token.token}` },
        }
      );
      //  navigate("/")
      console.log("user data ==>", response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);


export const signup = createAsyncThunk(
  "auth/signup",
  async (signupDetails, { getState, rejectWithValue, dispatch }) => {
    // console.log("details ==>", signupDetails)
    try {
      console.log("details in try==>", signupDetails);
      const res = await axios.post(
        `${baseurl}/auth/register`,
        signupDetails,
        Config
      );
      // console.log("beginiing...");
      console.log("response =======>", res.data);
      // console.log("ending...");
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);


export const logout = async () => {
  try {
    return "Logout succesfull";
  } catch (error) {
    if (error.response && error.response.data.message) {
      // dispatch(setError("Incorrect credentials"));
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.response.data);
    }
  }
};