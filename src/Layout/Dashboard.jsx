import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaTasks } from "react-icons/fa";

import { IoIosAddCircle } from "react-icons/io";
import useAuth from "../hooks/useAuth";
// import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      {/* <Helmet>
        <title>Hotelier | Dashboard</title>
      </Helmet> */}
      <div className="flex">
        {/* dashboard side bar  */}
        <div className="w-64 min-h-screen pt-6 bg-slate-400  ">
          <Link to="/">
            <div className="block cursor-pointer p-4 font-bold">
              <img
                src="https://i.ibb.co/1q5Lfyz/demo-navbar-logo.png"
                alt="Micronet"
              />
            </div>
          </Link>
          <ul className="menu">
            <li className="text-lg">
              <NavLink to="/dashboard/addTask">
                <IoIosAddCircle></IoIosAddCircle>
                Add Task
              </NavLink>
            </li>

            <div className="divider"></div>
            <li className="text-lg">
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content  */}
        <div className="flex-1 p-10">
          <div className="bg-[#d88531] w-[500px] h-16 text-white flex items-center pl-4">
            <h1>
              Hello, <span>{user?.displayName}</span> Welcome to Dashboard!
            </h1>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
