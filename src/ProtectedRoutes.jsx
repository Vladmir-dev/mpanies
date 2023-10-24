import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const token = useSelector((state) => state.users.token);

  console.log("token ===>", token);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
