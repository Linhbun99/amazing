import Home from '../pages/Home';
import Login from '../pages/Login';

import routes from '../constants/route';
import Product from '../pages/Product';

export default [
  {
    path: routes.LOGIN,
    component: Login,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.HOME,
    component: Home,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.PRODUCT,
    component: Product,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
];
