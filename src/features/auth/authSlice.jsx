import { createSlice } from "@reduxjs/toolkit";
import { login, signup, otp, get_user } from "./authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    token: null,
    isLoading: false,
    error: null,
    message: null,
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.error = false;
      state.token = null;
      window.location.href = "/";
    },
  },

  extraReducers: (builder) => {
    //login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      console.log("login token", action.payload);
      state.isLoading = false;
      state.token = action.payload;
      console.log("token", state.token);
      window.location.href = "/";
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //sign up
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("action payload", action.payload);
      if (action.payload === "user with this email already exists.") {
        alert(action.payload);
      } else {
        alert("Account created successfully, Check email for verification");
      }

      state.message = action.payload;
      // window.location.href = "/login";
    });

    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error in acton ===>", action.payload);
      state.error = action.payload;
      console.log("Error", error);
    });

    //otp
    builder.addCase(otp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(otp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      window.location.href = "/";
    });

    builder.addCase(otp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //user
    builder.addCase(get_user.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_user.fulfilled, (state, action) => {
      console.log("slice user =>", action.payload);
      state.isLoading = false;
      state.currentUser = action.payload;
    });

    builder.addCase(get_user.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
