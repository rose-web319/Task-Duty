import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home/Home";
import Alltask from "../Pages/Task/Alltask";
import Newtask from "../Pages/Task/Newtask";
import Rootlayout from "../Layout/Rootlayout";
import Gotomytask from "../Pages/Task/Gotomytask";
import Authlayout from "../Layout/Authlayout";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login"
import { PrivateRoute, PublicRoute } from "./ProtectedRoute";
import { useAuth } from "../hooks/useAuth";
import { Suspense } from "react";
import Spinner from "../Components/Spinner";


export default function AppRoutes() {
  const { accessToken } = useAuth();
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
          element: (
            <PrivateRoute accessToken={accessToken}>
            <Newtask />,
            </PrivateRoute>
          ),
          
        },
      {
        path:"auth/alltask",
        element:(
          <PrivateRoute accessToken={accessToken}>
          <Alltask/>
          </PrivateRoute>
        ),
      },
        {
          path: "auth/gotomytask",
          element: (
            <PrivateRoute accessToken={accessToken}>
             <Gotomytask/>
            </PrivateRoute>
          ),
          
        },
     
      ],
    },
    {
      element: (
        <Suspense fallback={<Spinner/>}>
        <PublicRoute accessToken={accessToken}>
        </PublicRoute>
        <Authlayout />
        </Suspense>
      ),
      
      children: [
        {
          path: "auth/register",
          element: <Register/>
        },
        {
          path: "auth/login",
          element: <Login/>
        }
      ]
    }
  ];

  const router = createBrowserRouter(route);

  return <RouterProvider router={router} />;
}
