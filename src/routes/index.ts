import { IRoute } from '@/constants/interface';
import {
  AboutUs,
  EditPersonalInfor,
  Home,
  ImageDetail,
  Login,
  Register,
} from '@/pages';

const publicRoutes: IRoute[] = [
  { path: '/', component: Home },
  { path: '/about-us', component: AboutUs },
  {
    path: '/image-detail/:id',
    component: ImageDetail,
  },
  {
    path: '/register',
    component: Register,
    layout: 'auth',
  },
  {
    path: '/login',
    component: Login,
    layout: 'auth',
  },
];
const privateRoutes: IRoute[] = [
  {
    path: '/edit-information',
    component: EditPersonalInfor,
  },
];

export { publicRoutes, privateRoutes };
