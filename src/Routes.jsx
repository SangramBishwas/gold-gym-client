import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import AllTrainer from "./Pages/All Trainer/AllTrainer";
import AllClasses from "./Pages/All Classes/AllClasses";
import Forum from "./Pages/Forum/Forum";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Details from "./Pages/All Trainer/Details";
import TrainerBooked from "./Pages/All Trainer/TrainerBooked";
import Payment from "./Pages/Payment/Payment";
import BeTrainer from "./Pages/All Trainer/BeTrainer";
import Dashboard from "./Dashboard/Dashboard";
import AllSubscribers from "./Dashboard/Admn/AllSubscribers";
import AllTrainers from "./Dashboard/Admn/AllTrainers";
import AppliedTrainers from "./Dashboard/Admn/AppliedTrainers";
import Balance from "./Dashboard/Admn/Balance";
import AddClasses from "./Dashboard/Admn/AddClasses";
import AddSlots from "./Dashboard/Trainer/AddSlots";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all&trainer',
                element: <AllTrainer></AllTrainer>
            },
            {
                path: '/trainers/:id',
                element: <Details></Details>
            },
            {
                path: '/be&trainer',
                element: <BeTrainer></BeTrainer>
            },
            {
                path: '/booked&trainer',
                element: <TrainerBooked></TrainerBooked>
            },
            {
                path: '/all&classes',
                element: <AllClasses></AllClasses>
            },
            {
                path: '/forum',
                element: <Forum></Forum>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            },
        ]
    },
    {
        path: '/dashboard',
        element:<Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/subscribers',
                element:<AllSubscribers></AllSubscribers>
            },
            {
                path: '/dashboard/trainers',
                element: <AllTrainers></AllTrainers>
            },
            {
                path: '/dashboard/requests',
                element: <AppliedTrainers></AppliedTrainers>
            },
            {
                path: '/dashboard/balance',
                element: <Balance></Balance>
            },
            {
                path: '/dashboard/add&class',
                element: <AddClasses></AddClasses>
            },
            {
                path: '/dashboard/new&slots',
                element: <AddSlots></AddSlots>,
            },
        ]
        
    }
]); 