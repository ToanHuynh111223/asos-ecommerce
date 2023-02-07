import { Men, Women, PageNotFound } from "../pages";
export const publicRoutes = [
  { path: "/women", page: Women },
  { path: "/men", page: Men },
  { path: "*", page: PageNotFound, layout: null },
];
