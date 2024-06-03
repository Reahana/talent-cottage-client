import {createBrowserRouter} from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/Home/Home/Home";
import Course from "../components/pages/Course/Course";
import Instructor from "../components/pages/Instructor/Instructor";

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
        {
          path: "/courses",
          element: <Course></Course>
        },
        {
          path: "/instructors",
          element: <Instructor></Instructor>
        },
      ],
    },
  ]);

  export default router;