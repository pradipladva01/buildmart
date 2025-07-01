import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { retry } from "./utils/CommonFunctions";
import About from "./pages/About";
import Service from "./pages/Service";
import Career from "./pages/Career";
import CareerDetails from "./pages/CareerDetails";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
const Home = lazy(() => retry(() => import("./pages/Home")));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/blog-details/:slug",
      component: BlogDetails,
      element: <BlogDetails />,
    },
    {
      path: "/career",
      element: <Career />,
    },
    {
      path: "/jobs/:slug",
      component: CareerDetails,
      element: <CareerDetails />,
    },
    {
      path: "/*",
      element: <Navigate replace to="/404" />,
    },
  ]);
  return routes;
};

export default Routes;
