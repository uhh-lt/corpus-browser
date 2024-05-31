import "@elastic/react-search-ui-views/lib/styles/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CorpusOverview from "./CorpusOverview.tsx";
import Teaching from "./pages/Teaching.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CorpusOverview />,
  },
  {
    path: "/corpus/teaching",
    element: <Teaching />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
