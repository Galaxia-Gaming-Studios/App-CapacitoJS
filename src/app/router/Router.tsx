import { createBrowserRouter } from "react-router";
import Home from "../../pages/Home";

//import Home from "../../pages/prueba/home";
//import Page from "../../pages/prueba/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  /*{
    path: "/",
    element: <Home onEnter={() => {
      window.location.href = "/app";
    }} />,
  },
  {
    path: "/app/*",
    element: <Page />,
  },*/
]);
