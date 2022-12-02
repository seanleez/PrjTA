import { IRoute } from '@constants/interface';
import {
  AboutUs,
  EditPersonalInfor,
  Home,
  ImageDetail,
  Login,
  Register,
} from '@pages';

const publicRoutes: IRoute[] = [
  { path: '/', component: Home },
  { path: '/image-detail/:id', component: ImageDetail },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/about-us', component: AboutUs },
];
const privateRoutes: IRoute[] = [
  { path: '/edit-information', component: EditPersonalInfor },
];

export { publicRoutes, privateRoutes };
