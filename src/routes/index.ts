import { IRoute } from "@constants/interface";
import React from "react";

const publicRoutes: IRoute[] = [
  { path: "/", component: React.lazy(() => import("@pages/Home")) },
  {
    path: "/register",
    component: React.lazy(() => import("@pages/Register")),
    layout: "form",
  },
  {
    path: "/login",
    component: React.lazy(() => import("@pages/Login")),
    layout: "form",
  },
  {
    path: "/about-us",
    component: React.lazy(() => import("@pages/AboutUs")),
    layout: "form",
  },
];
const privateRoutes: IRoute[] = [
  {
    path: "/edit-information",
    component: React.lazy(() => import("@pages/EditPersonalInfor")),
    layout: "form",
  },
  {
    path: "/image-detail/:id",
    component: React.lazy(() => import("@pages/ImageDetail")),
  },
  { path: "/cart", component: React.lazy(() => import("@pages/Cart")) },
];

export { publicRoutes, privateRoutes };
