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
import MySelectedCourse from "../components/pages/Dashboard/Student/MySelectedCourse";
import MyClasses from "../components/pages/Dashboard/Instructor/MyClasses";
import AddCourse from "../components/pages/Dashboard/Instructor/AddCourse";
import ManageClass from "../components/pages/Dashboard/Admin/ManageClass";
import Payment from "../components/pages/Dashboard/Student/Payment/Payment";
import PaymentHistory from "../components/pages/Dashboard/Student/Payment/PaymentHistory";
import EnrolledCourse from "../components/pages/Dashboard/Student/EnrolledCourse";
import About from "../components/pages/About/About";

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
          path: "/about",
          element: <About></About>
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
          path: "manageCourse",
        element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path: "instructorHome",
        element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
        },
        {
          path: "myClass",
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path: "addCourse",
        element: <InstructorRoute><AddCourse></AddCourse></InstructorRoute>
        },
        {
          path:"studentHome",
          element:<PrivateRoute><StudentHome></StudentHome></PrivateRoute>
        },
        {
          path:"selectedCourse",
          element:<PrivateRoute><MySelectedCourse></MySelectedCourse></PrivateRoute>
        },
        {
          path:"enrolledCourse",
          element:<PrivateRoute><EnrolledCourse></EnrolledCourse></PrivateRoute>
        },
        {
          path:"payment",
          element:<PrivateRoute><Payment></Payment></PrivateRoute>
        },
        {
          path:"paymentHistory",
          element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        },
      ]
    }
  ]);

  export default router;