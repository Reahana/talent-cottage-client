import {createBrowserRouter} from "react-router-dom";
import Root from "../components/layout/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      //errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
         // element: <Contact />,
        },
      ],
    },
  ]);

  export default router;