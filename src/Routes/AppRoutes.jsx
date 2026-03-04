import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home/Home";
import Alltask from "../Pages/Task/Alltask";
import Newtask from "../Pages/Task/Newtask";
import Rootlayout from "../Layout/Rootlayout";
import Gotomytask from "../Pages/Task/Gotomytask";

export default function AppRoutes() {
  const route = [
    {
      path: "/",
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "auth/newtask",
          element: <Newtask />,
        },
        {
          path: "auth/alltask",
          element: <Alltask />,
        },
        {
          path: "auth/gotomytask",
          element: <Gotomytask/>,
        }
      ],
    },
  ];

  const router = createBrowserRouter(route);

  return <RouterProvider router={router} />;
}
