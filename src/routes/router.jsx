import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import Materials from "../pages/Materials.jsx";
import Process from "../pages/Process.jsx";
import Contact from "../pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "materials",
        element: <Materials />,
      },
      {
        path: "process",
        element: <Process />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
