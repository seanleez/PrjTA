import { IRoute } from "@constants/interface";
import {
  AboutUs,
  EditPersonalInfor,
  Home,
  ImageDetail,
  Login,
  Register,
} from "@pages";

const publicRoutes: IRoute[] = [
  { path: "/", component: Home },
  { path: "/image-detail/:id", component: ImageDetail },
  { path: "/register", component: Register, layout: "form" },
  { path: "/login", component: Login, layout: "form" },
  { path: "/about-us", component: AboutUs },
];
const privateRoutes: IRoute[] = [
  { path: "/edit-information", component: EditPersonalInfor, layout: "form" },
];

export { publicRoutes, privateRoutes };
