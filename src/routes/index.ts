import { Men, Women, PageNotFound, Login, Register, ForgotPassword} from "../pages";
export const publicRoutes = [
  { path: "/women", page: Women },
  { path: "/men", page: Men },
  { path: "*", page: PageNotFound, layout: null },
  { path: "/login", page:Login, layout: null },
  { path: "/register", page: Register, layout: null },
  { path: "/forgot-password", page: ForgotPassword, layout: null },
];
