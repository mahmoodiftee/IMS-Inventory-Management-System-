import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
const Navbar = () => {
  const links = (
    <>
      <li> <NavLink to={"/"}>Home</NavLink></li>
      <li> <NavLink to={"/createStore"}>Create Store</NavLink></li>
      <li> <NavLink to={"/watchDemo"}>Watch Demo</NavLink></li>
    </>
  );

  return (
    <div className="navbar  z-[9999] bg-transparent" style={{ backdropFilter: 'blur(7px)' }}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"viewBox="0 0 24 24"stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="ml-4 Nav flex gap-4 justify-center items-center font-medium">{links}</ul>
        </div>
      </div>
      <div className="navbar-center gap-2">
        <img className="w-12" src={logo} alt="" />
        <p className="font-extrabold bg-gradient-to-r from-[#fcd015] to-[#ff9d00] text-transparent bg-clip-text">IMS</p>
      </div>
      <div className="navbar-end mr-4">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="" src={user} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
