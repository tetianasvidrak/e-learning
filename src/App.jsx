import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

import { setToken } from "./axios/axios";

import PublicRoute from "./components/public-route";
import ProtectedRoute from "./components/protected-route";

import SignIn from "./pages/sign-in";
import Layout from "./components/layout";

export const App = () => {
  const { token, user } = useSelector((state) => state.auth);

  if (token) {
    setToken(token);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute role="all">
          <Layout role={user?.role} />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/teacher",
          element: (
            <ProtectedRoute role="teacher">
              <div>ProctedRouter</div>
            </ProtectedRoute>
          ),
        },
        {
          path: "/teacher/courses",
          element: (
            <ProtectedRoute role="teacher">
              <div>ProctedRouter</div>
            </ProtectedRoute>
          ),
        },
        {
          path: "/teacher/courses/:id",
          element: (
            <ProtectedRoute role="teacher">
              <div>ProctedRouter</div>
            </ProtectedRoute>
          ),
        },
        {
          path: "/teacher/courses/new",
          element: (
            <ProtectedRoute role="teacher">
              <div>ProctedRouter</div>
            </ProtectedRoute>
          ),
        },
        {
          path: "/teacher/users",
          element: (
            <ProtectedRoute role="teacher">
              <div>ProctedRouter</div>
            </ProtectedRoute>
          ),
        },
        {
          path: "/user",
          element: <div>ProctedRouter</div>,
        },
        {
          path: "/user/courses",
          element: <div>ProctedRouter</div>,
        },
        {
          path: "/user/courses/:id",
          element: <div>ProctedRouter</div>,
        },
        {
          path: "/user/courses/:id/lessons",
          element: <div>ProctedRouter</div>,
        },
        {
          path: "/user/courses/:id/lessons/:lessonId",
          element: <div>ProctedRouter</div>,
        },
      ],
    },
    {
      path: "/signin",
      element: (
        <PublicRoute>
          <SignIn />
        </PublicRoute>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
