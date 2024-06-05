import {createBrowserRouter} from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/Home/Home/Home";
import Course from "../components/pages/Course/Course";
import Instructor from "../components/pages/Instructor/Instructor";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Dashboard from "../components/layout/Dashboard";
import ManageUser from "../components/pages/Dashboard/Admin/MangeUser";
import AdminHome from "../components/pages/Dashboard/Admin/AdminHome";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import InstructorHome from "../components/pages/Dashboard/Instructor/InstructorHome";
import PrivateRoute from "./PrivateRoute";
import StudentHome from "../components/pages/Dashboard/Student/StudentHome";
import ErrorPage from "../components/404/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: "manageUser",
        element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
        {
          path: "instructorHome",
        element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
        },
        {
          path:"studentHome",
          element:<PrivateRoute><StudentHome></StudentHome></PrivateRoute>
        }
      ]
    }
  ]);

  export default router;