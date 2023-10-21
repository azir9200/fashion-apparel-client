
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/Provider';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }




  return (
    <nav className="bg-blue-100 shadow-lg">
      <div className="container mx-auto  md:flex justify-between items-center py-4">
        <div className="md:flex   justify-center text-center  items-center">
          <img src="https://i.ibb.co/4Wz94Jy/logo2.png" alt="Logo" className="w-16 h-16 rounded-lg " />
          <h4 className="text-2xl text-green-500 font-semibold ml-2">FASHION Fusion</h4>
        </div>

        <ul className=" md:flex gap-6 text-center text-xl font-semibold text-gray-700">
          <li>
            <NavLink to="/" activeClassName="text-red-500">Home</NavLink>
          </li>
          <li>
            <NavLink to="/addproducts" activeClassName="text-red-500"> Add Products</NavLink>
          </li>
          <li>
            <NavLink to="/myCart" activeClassName="text-red-500">My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="text-red-500">Login</NavLink>
          </li>




          <li className="navbar-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src={userDefaultPic} /> */}
              </div>
            </label>
            {
              user ?
                <button onClick={handleSignOut} className="btn">Sign Out</button>
                :
                <Link to="/login">
                  <button className="btn">Login</button>
                </Link>
            }

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
