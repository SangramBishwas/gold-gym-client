import { Link, NavLink } from "react-router-dom";
import useAuth from "./Hooks/useAuth";

const Navbar = () => {
    const { user, LogOut } = useAuth();

    const handleLogOut = () => {
        LogOut()
            .then()
            .catch()
    }
    const links = <>
        <li onClick="reload()"><NavLink className={({ isActive }) => isActive ? "font-bold text-base text-green-500" : "text-base font-semibold"} to="/">Home</NavLink></li>
        <li onClick="reload()"><NavLink className={({ isActive }) => isActive ? "font-bold text-base text-green-500" : "text-base font-semibold"} to="/all&trainer">All Trainer</NavLink></li>
        <li onClick="reload()"><NavLink className={({ isActive }) => isActive ? "font-bold text-base text-green-500" : "text-base font-semibold"} to="/all&classes">All Classes</NavLink></li>
        <li onClick="reload()"><NavLink className={({ isActive }) => isActive ? "font-bold text-base text-green-500" : "text-base font-semibold"} to="/forum">Forum</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">GoldGYM</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-64 space-y-3">
                                <li>
                                    <p className="justify-between">
                                        {user.displayName}
                                    </p>
                                </li>
                                <button className="btn btn-sm">Dashboard</button>
                                <button onClick={handleLogOut} className="btn btn-sm">Logout</button>
                            </ul>
                        </div> : <Link to="/login" className="btn btn-sm">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;