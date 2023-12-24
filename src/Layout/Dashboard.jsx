import { Link, NavLink, Outlet } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      {/* <Helmet>
        <title>Hotelier | Dashboard</title>
      </Helmet> */}
      <div className="flex">
        {/* dashboard side bar  */}
        <div className="w-64 min-h-screen pt-6 bg-slate-400  ">
          <Link to="/">
            <div className="cursor-pointer ml-16 mb-4 rounded-full">
              <img
                className="w-[80px] h-[80px] rounded-full"
                src={user.photoURL}
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
              <NavLink to="/" onClick={logOut}>
                <MdLogout></MdLogout>
                LogOut
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
