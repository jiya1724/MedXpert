import React from "react";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import Password from "../pages/Password";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors"
import Appointment from "../pages/Appointment";
import Test from "../pages/Test";
import ComingSoon from "../pages/ComingSoon";
import Landing1 from "../pages/Landing1";
import Landing2 from "../pages/Landing2";
import Landing3 from "../pages/Landing3";
import Details from "../pages/Details";
import Settings from "../pages/Settings";
import login from "../pages/Login";
import Hospital from "../pages/Hospital";
import Hlogin from "../pages/Hlogin";
import Hdashboard from "../pages/Hdashboard";
import Hadddoc from "../pages/Hadddoc";
import Alogin from "../pages/Adminlogin";
import Adash from "../pages/Admindash";
import Aaddhosp from '../pages/Adminaddhosp';
const routes = [
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path:"/password",
        element:<Password/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },
,
    {
        path:"/doctors",
        element:<Doctors/>,
    },
    {
        path:"/appointment",
        element:<Appointment/>,
    },
    {
        path:"/test",
        element:<Test/>,
    },
    {
        path:"/comingsoon",
        element:<ComingSoon/>,
    },
    {
        path:"/landing1",
        element:<Landing1/>,
    },
    {
        path:"/landing2",
        element:<Landing2/>,
    },
    {
        path:"/landing3",
        element:<Landing3/>,
    },
    {
        path:"/details",
        element:<Details/>,
    },
    {
        path:"/settings",
        element:<Settings/>,
    },
    {
        path:"/login",
        element:<login/>,
    },
    {
        path:"/hospital",
        element:<Hospital/>,
    },
    {
        path:"/hospital-login",
        element:<Hlogin/>,
    },
    {
        path:"/hospital-dashboard",
        element:<Hdashboard/>,
    },
    {
        path:"/hospital-adddoc",
        element:<Hadddoc/>,
    },
    {
        path:"/adminlogin",
        element:<Alogin/>,
    },
    {
        path:"/adash",
        element:<Adash/>,
    },
    {
        path:"/aaddhosp",
        element:<Aaddhosp/>,
    }



];

export default routes;