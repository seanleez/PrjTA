import { IRoute } from "@constants/interface";
import React from "react";

const Home = React.lazy(() => import("@pages/Home"));
const AboutUs = React.lazy(() => import("@pages/AboutUs"));
const Cart = React.lazy(() => import("@pages/Cart"));
const EditPersonalInfor = React.lazy(() => import("@pages/EditPersonalInfor"));
const ImageDetail = React.lazy(() => import("@pages/ImageDetail"));
const Login = React.lazy(() => import("@pages/Login"));
const Register = React.lazy(() => import("@pages/Register"));

const publicRoutes: IRoute[] = [
  { path: "/", component: Home },
  { path: "/image-detail/:id", component: ImageDetail },
  { path: "/register", component: Register, layout: "form" },
  { path: "/login", component: Login, layout: "form" },
  { path: "/about-us", component: AboutUs, layout: "form" },
  { path: "/cart", component: Cart },
  { path: "/edit-information", component: EditPersonalInfor, layout: "form" },
];
const privateRoutes: IRoute[] = [
  { path: "/edit-information", component: EditPersonalInfor, layout: "form" },
];

export { publicRoutes, privateRoutes };
