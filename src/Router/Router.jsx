import {createBrowserRouter} from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/Home/Home/Home";
import Course from "../components/pages/Course/Course";
import Instructor from "../components/pages/Instructor/Instructor";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Dashboard from "../components/layout/Dashboard";

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
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children:[

      ]
    }
  ]);

  export default router;