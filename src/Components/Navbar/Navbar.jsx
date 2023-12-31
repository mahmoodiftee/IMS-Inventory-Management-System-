import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, LogOut } = useContext(AuthContext);
  const [hasStore, setHasStore] = useState(false);

  useEffect(() => {
    if (user) {
      setHasStore(user?.role === 'manager');
    }
  }, [user]);
  

  const handleSignOut = () => {
    LogOut();
    Swal.fire({
      icon: "success",
      text: "Successfully signed out",
    });
    navigate("/login");
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {(user && !hasStore) || !user ? (
        <li>
          <NavLink to={"/createStore"}>Create Store</NavLink>
        </li>
      ) : null}
      {user && hasStore && (
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/watchDemo"}>Watch Demo</NavLink>
      </li>
    </>
  );

  return (
    <div
      className="navbar relative lg:px-10 bg-transparent"
      style={{ backdropFilter: "blur(7px)", zIndex: '9999' }}
    >
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
            className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="ml-4 Nav flex gap-4 justify-center items-center font-medium">
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center gap-2 ml-4 lg:ml-6">
        <Link to={'/'}>
          <img className="w-12" src={logo} alt="" />
        </Link>
        <p className="font-extrabold bg-gradient-to-r from-[#fcd015] to-[#ff9d00] text-transparent bg-clip-text">
          IMS
        </p>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="dropdown z-[9999] dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[250px]"
            >
              <li>
                <button className="btn btn-sm lowercase btn-ghost">
                  {user?.displayName}
                </button>
              </li>
              <li>
                <button className="btn btn-sm lowercase btn-ghost">
                  {user?.email}
                </button>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm capitalize btn-ghost"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-4">
            <NavLink className="hidden lg:block nav-btn font-medium" to={"/login"}>Login</NavLink>
            <NavLink className="hidden lg:block nav-btn font-medium" to={"/register"}>Register</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;