import { createBrowserRouter } from "react-router";
import { CategoryPage } from "@/pages/category";
import { MainPage } from "@/pages/main";
import { Layout } from "@app/layout";
import { ROUTES } from "@shared/routes";
export const router = createBrowserRouter([
  {
    path: ROUTES.main,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: ROUTES.community,
        element: <a>Comm</a>,
      },
      {
        path: ROUTES.category(":category"),
        element: <CategoryPage />,
      },
      {
        path: ROUTES.article(":alias"),
        children: [
          {
            element: <a>Article</a>,
          },
        ],
      },
      {
        path: ROUTES.profile.index,
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
