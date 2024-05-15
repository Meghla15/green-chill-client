import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Gallery from "../Pages/Gallery/Gallery";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DetailPage from "../Pages/FoodDetailsPage/DetailPage";
import PurchasePage from "../Pages/PurchasePage/PurchasePage";
import AddedFood from "../Pages/AddedFoods/AddedFood";
import MyAddFood from "../Pages/MyAddFoodPage/MyAddFood";
import OrderFood from "../Pages/OrderedFoodPage/OrderFood";
import Update from "../Pages/UpdatePage/Update";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";


const route = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:() =>fetch (`${import.meta.env.VITE_API_URL}/foods`)
            },
            {
                path: '/allFoods',
                element: <AllFoods></AllFoods>,
                // loader:() =>fetch (`${import.meta.env.VITE_API_URL}/foods`)
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>,
                loader:() =>fetch (`${import.meta.env.VITE_API_URL}/foods`)
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
                path: '/addedFood',
                element: <PrivetRoute><AddedFood></AddedFood></PrivetRoute>
            },
            {
                path: '/myAddFood',
                element: <PrivetRoute><MyAddFood></MyAddFood></PrivetRoute>
            },
            {
                path: '/orderFood',
                element: <PrivetRoute><OrderFood></OrderFood></PrivetRoute>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader:({params}) =>fetch (`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            },
            {
                path: '/food/:id',
                element: <DetailPage></DetailPage>,
                loader:({params}) =>fetch (`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            },
            {
                path: '/purchase/:id',
                element: <PrivetRoute><PurchasePage></PurchasePage></PrivetRoute>,
                loader:({params}) =>fetch (`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            },
        ]
    },
])

export default route;