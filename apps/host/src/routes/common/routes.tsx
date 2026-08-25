import Home from "@/pages/home";
import Products from "@/pages/products";
import { ROUTES } from "@/routes/common/routePath";

export const routesPaths = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.PRODUCTS,
    element: <Products />,
  },
];
