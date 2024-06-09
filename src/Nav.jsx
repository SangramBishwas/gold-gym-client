import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
const Nav = () => {
    const { user, LogOut } = useAuth();
    const handleLogout = () => {
        LogOut()
            .then()
            .catch()
    }
    const links = <>
        <li onClick="reload()"><NavLink className={({ isActive }) => isActive ? "font-bold md:text-base text-lime-400" : "md:text-base font-semibold"} to="/">Home</NavLink></li>
        <li onClick="reload()"><NavLink className={({ isActive }) => isActive ? "font-bold md:text-base text-lime-400" : "md:text-base font-semibold"} to="/all&trainer">All Trainer</NavLink></li>
        <li onClick="reload()"><NavLink className={({ isActive }) => isActive ? "font-bold md:text-base text-lime-400" : "md:text-base font-semibold"} to="/all&classes">All Classes</NavLink></li>
        <li onClick="reload()"><NavLink className={({ isActive }) => isActive ? "font-bold md:text-base text-lime-400" : "md:text-base font-semibold"} to="/forum">Forum</NavLink></li>
    </>
    return (
        <Navbar className="bg-slate-700 dark:bg-slate-400 text-white" fluid>
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white lg:pl-16">GoldGYM</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {
                    user ? <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img={user.photoURL} rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{user.displayName}</span>
                            <span className="block truncate text-sm font-medium">{user.email}</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                    </Dropdown> : <Link to="/login"><Button>Login</Button></Link>
                }

                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {links}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Nav;