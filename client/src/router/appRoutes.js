import routes from '../constants/route';
import Cart from '../pages/Cart';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetal';

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
  {
    path: routes.PRODUCT_DETAIL,
    component: ProductDetail,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
  {
    path: routes.PRODUCT_DETAIL,
    component: ProductDetail,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
  {
    path: routes.CART,
    component: Cart,
    exact: true,
    restricted: false,
    isPrivate: false,
  },
];
