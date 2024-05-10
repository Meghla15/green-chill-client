import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Gallery from "../Pages/Gallery/Gallery";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const route = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allFoods',
                element: <AllFoods></AllFoods>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
])

export default route;