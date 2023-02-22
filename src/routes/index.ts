import { Men, Women, PageNotFound, Login, Register, ForgotPassword, JeanProduct} from "../pages";
export const publicRoutes = [
  { path: "/women", page: Women },
  { path: "/men", page: Men },
  { path: "/men/jean-product", page: JeanProduct },
  {path: "/women/jean-product", page: JeanProduct},
  { path: "*", page: PageNotFound, layout: null },
  { path: "/login", page:Login, layout: null },
  { path: "/register", page: Register, layout: null },
  { path: "/forgot-password", page: ForgotPassword, layout: null },
];
