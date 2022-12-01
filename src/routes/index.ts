import { IRoute } from "@/constants/interface";
import Following from "@/pages/Following";
import Home from "@/pages/Home";

const publicRoutes: IRoute[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
];
const privateRoutes: IRoute[] = [];

export { publicRoutes, privateRoutes };
