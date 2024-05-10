import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Gallery from "../Pages/Gallery/Gallery";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DetailPage from "../Pages/FoodDetailsPage/DetailPage";


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
                element: <AllFoods></AllFoods>,
                loader:() =>fetch (`${import.meta.env.VITE_API_URL}/foods`)
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
            {
                path: '/food/:id',
                element: <DetailPage></DetailPage>,
                loader:({params}) =>fetch (`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            },
        ]
    },
])

export default route;