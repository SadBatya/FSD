import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    // Component: <Layout />
    children: [
      {
        index: true,
        element: <a>Main</a>,
      },
      {
        path: "community",
        element: <a>Comm</a>,
      },
      {
        path: ":category",
        element: <a>Category</a>,
      },
      {
        path: "article",
        children: [
          {
            path: ":alias",
            element: <a>Article</a>,
          },
        ],
      },
      {
        path: "profile",
        children: [
          {
            index: true,
            element: <a>Profile</a>,
          },
          {
            path: "edit",
            element: <a>EditProfile</a>,
          },
        ],
      },
    ],
  },
]);
