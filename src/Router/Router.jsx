import {createBrowserRouter} from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/Home/Home/Home";
import CourseContainer from "../components/pages/Course/CourseContainer";
import Course from "../components/pages/Course/Course";

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
      ],
    },
  ]);

  export default router;