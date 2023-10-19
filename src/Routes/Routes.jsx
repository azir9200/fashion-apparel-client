import { createBrowserRouter } from "react-router-dom";


import Login from "../Components/Pages/Login/Login";
import Products from "../Components/Pages/Products/Products";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home";
import AllBrands from "../Components/AllBrands/AllBrands";
import BrandDetails from "../Components/BrandDetails/BrandDetails";
import Register from "../Components/Pages/Login/Register";
import ErrorPage from "../Components/ShareFiles/ErrorPage/ErrorPage";

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
        path: "/products",
        element: <Products></Products>
      },

      {
        path: '/allBrands',
        element: <AllBrands></AllBrands>
      },
      {
        path: '/brandDetails/:id',
        loader: ({ params }) => fetch(`https://fashion-apparel-server.vercel.app/allbrands/${params.id}`),
        element: <BrandDetails></BrandDetails>
      }

    ]
  }
]);

export default routers;