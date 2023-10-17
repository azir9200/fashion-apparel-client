import { createBrowserRouter } from "react-router-dom";


import Login from "../Components/Pages/Login/Login";
import Products from "../Components/Pages/Products/Products";
import CategoryCloset from "../Components/Pages/CategoryCloset/CategoryCloset";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home";
import AllBrands from "../Components/AllBrands/AllBrands";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: '/categoryCloset',
        element: <CategoryCloset></CategoryCloset>
      },
      {
        path: '/allBrands',
        element: <AllBrands></AllBrands>
      }
    ]
  }
]);

export default routers;