import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PrivateRouter: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;