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
import Adidas from "../Components/Brands/Adidas";
import Cart from "../Components/Pages/Cart/Cart";

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
        path: "/addproducts",
        element: <Products></Products>
      },
      {
        path: "/cart",
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
        path: '/brandDetails/:name',
        loader: ({ params }) => fetch(`http://localhost:5000/allCards/${params.name}`),
        element: <BrandDetails></BrandDetails>
      },
      {
        path: '/adidas/:name',
        loader: ({ params }) => fetch(`http://localhost:5000/allCards/${params.name}`),
        element: <Adidas></Adidas>
      }

    ]
  }
]);

export default routers;