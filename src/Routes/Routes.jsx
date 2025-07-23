import {
  createBrowserRouter,RouterProvider,
} from "react-router";

import Home from "../Pages/Home";
import Mainlayout from "../Layout/Mainlayout";
import ErrorPage from "../Pages/ErrorPage";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    }
  ]);