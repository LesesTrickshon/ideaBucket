import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Add_Task from "./pages/add_task/add_task.tsx";
import Add_Bucket from "./pages/add_bucket/add_bucket.tsx";
import Settings from "./pages/settings/settings.tsx";
import Buckets from "./pages/buckets/buckets.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/add_task", element: <Add_Task /> },
  { path: "/add_bucket", element: <Add_Bucket /> },
  { path: "/settings", element: <Settings /> },
  { path: "/buckets", element: <Buckets /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
