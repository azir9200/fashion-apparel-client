
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-100 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="https://i.ibb.co/4Wz94Jy/logo2.png" alt="Logo" className="w-8 h-8" />
          <h4 className="text-2xl text-green-500 font-semibold ml-2">FASHION Fusion</h4>
        </div>

        <ul className="hidden md:flex gap-6 text-xl font-semibold text-gray-700">
          <li>
            <NavLink to="/" activeClassName="text-red-500">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="text-red-500">Products</NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="text-red-500">Login</NavLink>
          </li>
          <li>
            <NavLink to="/allBrands" activeClassName="text-red-500">AllBrands</NavLink>
          </li>
        </ul>

        {/* Mobile Menu (Hamburger Menu) */}
        <div className="md:hidden">
          <button
            className="block text-3xl text-gray-600"
            onClick={() => {
              // Add logic to toggle the mobile menu
            }}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;