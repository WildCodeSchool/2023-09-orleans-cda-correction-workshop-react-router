import { Outlet, createBrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import JsDef from "./pages/JsDef";
import CssDef from "./pages/CssDef";
import HtmlDef from "./pages/HtmlDef";
import Page404 from "./pages/404";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <Menu />

        <div className="outlet">
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "css",
        element: <CssDef />,
      },
      {
        path: "html",
        element: <HtmlDef />,
      },
    ],
  },
  {
    path: "admin",
    element: (
      <>
        {"J'suis admin non ?"}

        <div className="outlet">
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        path: "js",
        element: <JsDef />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
