import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const links = (
        <>
        <li className="font-semibold">
            <NavLink to="/">Home</NavLink>
          </li>
        <li className="font-semibold">
            <NavLink to="/allFoods">All Foods</NavLink>
          </li>
        <li className="font-semibold">
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
       
        </>
    )
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Green Chilli</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              {links}
          </ul>
        </div>
        <div className="navbar-end">
         
        {/* {user ? ( */}
          <div className="dropdown dropdown-left flex">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt=''
                  src={
                    // user?.photoURL ||
                    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
                
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="font-neon ">
                  {/* {user.displayName ||"Name Not Founded"} */}
                </p>
              </li>
              
              <button
            //   onClick={logout}
              className="btn btn-primary font-acme font-bold"
            >
              Logout
            </button>
              
            </ul>
             
           
          </div>
        {/* ) : ( */}
          <Link to="/login">
            <button className="btn btn-primary font-neon font-bold">
              Login
            </button>
          </Link>
        {/* )} */}
        </div>
      </div>
    )
  }
  
  export default Navbar