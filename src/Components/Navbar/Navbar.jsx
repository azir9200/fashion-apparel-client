
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-100 shadow-lg">
      <div className="container mx-auto  md:flex justify-between items-center py-4">
        <div className="md:flex   justify-center text-center  items-center">
          <img src="https://i.ibb.co/4Wz94Jy/logo2.png" alt="Logo" className="w-16 h-16 rounded-lg " />
          <h4 className="text-2xl text-green-500 font-semibold ml-2">FASHION Fusion</h4>
        </div>

        <ul className=" md:flex gap-6 text-xl font-semibold text-gray-700">
          <li>
            <NavLink to="/" activeClassName="text-red-500">Home</NavLink>
          </li>
          <li>
            <NavLink to="/addproducts" activeClassName="text-red-500"> Add Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="text-red-500">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="text-red-500">Login</NavLink>
          </li>
          <li>
            <NavLink to="/allBrands" activeClassName="text-red-500">AllBrands</NavLink>
          </li>
          <li>
            <NavLink to="/allCards" activeClassName="text-red-500">AllCards</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
