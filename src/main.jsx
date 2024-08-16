import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./sass/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/sign-in-form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    children: [
      {
        path: "/teacher",
        element: <div>ProctedRouter</div>,
      },
      {
        path: "/teacher/courses",
        element: <div>ProctedRouter</div>,
      },
      {
        path: "/teacher/courses/:id",
        element: <div>ProctedRouter</div>,
      },
      {
        path: "/teacher/courses/new",
        element: <div>ProctedRouter</div>,
      },
      {
        path: "/teacher/users",
        element: <div>ProctedRouter</div>,
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
    element: <div>Signin</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
