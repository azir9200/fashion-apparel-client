import { createBrowserRouter } from "react-router-dom";


import Login from "../Components/Pages/Login/Login";
import Products from "../Components/Pages/Products/Products";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home";
import AllBrands from "../Components/AllBrands/AllBrands";
import BrandDetails from "../Components/BrandDetails/BrandDetails";
import Register from "../Components/Pages/Login/Register";
import ErrorPage from "../Components/ShareFiles/ErrorPage/ErrorPage";
import AllCards from "../Components/AllCards/AllCards";
import Cart from "../Components/Pages/Cart/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CartDetails from "../Components/CartDetails/CartDetails";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/allbrands')
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
        path: "/addProducts",
        element: <Products></Products>
      },
      {
        path: "/myCart",
        element: <Cart></Cart>
      },

      {
        path: '/allBrands',
        element: <AllBrands></AllBrands>
      },
      {
        path: '/allCards',
        element: <AllCards></AllCards>
      },
      {
        path: '/cartDetails/:id',
        element: <PrivateRoute><CartDetails></CartDetails>  </PrivateRoute>
      },
      // optional , remove later
      {
        path: '/cartDetails/:id',
        element: <CartDetails></CartDetails>,
        loader: ({ _id }) => fetch(`http://localhost:5000/allCards/${_id}`),

      },
      //  until here
      {
        path: '/brandDetails/:name',
        loader: ({ params }) => fetch(`http://localhost:5000/allCards/${params.name}`),
        element: <BrandDetails></BrandDetails>
      },


    ]
  }
]);

export default routers;