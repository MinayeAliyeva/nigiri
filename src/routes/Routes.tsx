import Home from "../components/home";
import About from "../components/pages/about";
import Products from "../components/shop/product-list";
import MainLayout from "../container/MainLayout";
import ProductInfoOutlet from "../container/ProductInfoOutlet";
import { RouteObject, useRoutes } from "react-router-dom";

type MyRouteObject = RouteObject;
export const routes: MyRouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <ProductInfoOutlet />,
        children: [
          {
            index: true,
            element: <Products />,
          },
        ],
      },
    ],
  },
];

export const useMapRoute = (routes: MyRouteObject[]) => {
  return routes.map((route) => route);
};

export const useRoute = () => {
  return useRoutes(useMapRoute(routes));
};
