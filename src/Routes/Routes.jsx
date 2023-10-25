import { createBrowserRouter } from "react-router-dom";

import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home";
import BrandDetails from "../Components/BrandDetails/BrandDetails";
import ErrorPage from "../Components/ShareFiles/ErrorPage/ErrorPage";
import Cart from "../Components/Pages/Cart/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CartDetails from "../Components/CartDetails/CartDetails";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Login/Register";
import AddProduct from "../Components/AllCards/AllCards";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://fashion-apparel-server-pe9ejalgf-azir-uddins-projects.vercel.app/allbrands"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },

      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      // {
      //   path: '/cartDetails/:id',
      //   element: <PrivateRoute><CartDetails></CartDetails>  </PrivateRoute>
      // },

      // optional , remove later
      {
        path: "/cartDetails/:id",
        element: (
          <PrivateRoute>
            <CartDetails></CartDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://fashion-apparel-server-pe9ejalgf-azir-uddins-projects.vercel.app/cartDetails?id=${params.id}`),
      },
      //  until here
      {
        path: "/brandDetails/:name",
        loader: ({ params }) =>
          fetch(`https://fashion-apparel-server-pe9ejalgf-azir-uddins-projects.vercel.app/allCards/${params.name}`),
        element: <BrandDetails></BrandDetails>,
      },
    ],
  },
]);

export default routers;
