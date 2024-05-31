import "@elastic/react-search-ui-views/lib/styles/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CorpusOverview from "./CorpusOverview.tsx";
import GermanU15 from "./pages/GermanU15.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CorpusOverview />,
  },
  {
    path: "/corpus/germanu15",
    element: <GermanU15 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
