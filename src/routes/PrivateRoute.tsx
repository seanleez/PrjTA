import { useAppSelector } from "@hooks/reduxToolkitHooks";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isLogin = useAppSelector((state) => state.auth.isLogin);

  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
