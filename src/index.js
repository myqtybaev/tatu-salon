import React from "react";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/reset.css";
import { Main } from "./main";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./page/home/home2";
import { Artists } from "./page/artists/Artists";
import { Work } from "./page/work/work";
import { About } from "./page/about/about";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "artists", element: <Artists /> },
      { path: "work", element: <Work /> },
      { path: "about", element: <About /> },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
