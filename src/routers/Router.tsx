import App from "@/App";
import { HomePage } from "@/pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:serverId/home",
        element: <HomePage />,
      },
      {
        path: "/:serverId/group-chat",
        element: <HomePage />,
      },
      {
        path: "/:serverId/offline-meeting",
        element: <HomePage />,
      },
      {
        path: "/dm",
        element: <HomePage />,
      },
    ],
  },
]);
