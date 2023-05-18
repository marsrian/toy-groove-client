import { useContext } from 'react';
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../provider/AuthProvider";
import ActiveLink from '../../../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(error => console.log(error.message))
  }

  const navList = (
    <>
      <ActiveLink className="text-lg font-medium" to="/">Home</ActiveLink>
      <ActiveLink className="text-lg font-medium" to="/alltoys">All Toys</ActiveLink>
      <ActiveLink className="text-lg font-medium" to="/mytoys">My Toys</ActiveLink>
      <ActiveLink className="text-lg font-medium" to="/addtoy">Add A Toy</ActiveLink>
      <ActiveLink className="text-lg font-medium" to="/blog">Blog</ActiveLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <div className="flex">
          <img className="w-16 h-16" src={logo} alt="" />
          <h3 className="text-xl font-semibold">
            <span className="mb-0 text-2xl font-bold italic">Toy</span> <br />{" "}
            <span className="ml-2 italic">Groove</span>
          </h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 flex items-center my-auto">
          {navList}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ? <>
          <img title={user?.displayName} className='w-12 h-12 rounded-full mr-3' src={user?.photoURL} alt="" />
          <button onClick={handleLogOut} className="btn">LogOut</button>
          </> : <Link to="/login"><button className="btn">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Header;
