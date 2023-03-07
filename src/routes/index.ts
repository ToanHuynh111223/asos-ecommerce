import {
  Men,
  Women,
  PageNotFound,
  Login,
  Register,
  ForgotPassword,
  JeanProduct,
  JeanProductDetails,
  Cart,
} from "../pages";
export const publicRoutes = [
  { path: "/women", page: Women },
  { path: "/men", page: Men },
  { path: "/cart", page: Cart },
  { path: "/men/jean-product", page: JeanProduct },
  { path: "/women/jean-product", page: JeanProduct },
  { path: "/men/jean-product-details/:name", page: JeanProductDetails },
  { path: "/women/jean-product-details/:name", page: JeanProductDetails },
  { path: "*", page: PageNotFound, layout: null },
  { path: "/login", page: Login, layout: null },
  { path: "/register", page: Register, layout: null },
  { path: "/forgot-password", page: ForgotPassword, layout: null },
];
