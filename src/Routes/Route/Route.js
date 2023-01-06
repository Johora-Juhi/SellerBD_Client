import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import ProductCategory from "../../Pages/ProductCategory/ProductCategory/ProductCategory";
import ProductDetails from "../../Pages/ProductCategory/ProductDetails/ProductDetails";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><ProductCategory></ProductCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            // // {
            // //     path: '/dashboard/payment/:id',
            // //     element: <MakePayment></MakePayment>,
            // //     loader: ({ params }) => fetch(`http://localhost:5000/myorders/${params.id}`)
            // // },
            // {
            //     path: '/dashboard/allsellers',
            //     element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            // },
            // {
            //     path: '/dashboard/allbuyers',
            //     element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            // },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            // {
            //     path: '/dashboard/addProducts',
            //     element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            // },
            // {
            //     path: '/dashboard/myProducts',
            //     element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            // },
        ]
    }
])

export default router;