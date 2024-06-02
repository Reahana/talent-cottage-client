import {createBrowserRouter} from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      //errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
      ],
    },
  ]);

  export default router;