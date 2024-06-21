import { Sidebar } from "flowbite-react";
import { Toaster } from "react-hot-toast";
import { FaHome, FaSubscript } from "react-icons/fa";
import { HiChartPie, HiInbox, HiMenuAlt1, HiUsers, HiViewGridAdd } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useTrainer from "../Hooks/useTrainer";
import useUsers from "../Hooks/useUsers";
const Dashboard = () => {
    const [users] = useUsers();
    const [isAdmin] = useAdmin();
    const [isTrainer] = useTrainer();
    console.log(users);
    return (
        <div className="m-5 md:m-10 lg:mx-20 flex flex-col lg:flex-row lg:gap-10">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Sidebar className="w-full lg:w-1/5 text-xl md:text-2xl font-bold" aria-label="Sidebar with logo branding example">
                GoldGYM
                <Sidebar.Items className="lg:py-3">
                    {
                        isAdmin &&
                        <Sidebar.ItemGroup className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-1 items-center">

                            <NavLink className="w-full" to="/">
                                <Sidebar.Item icon={FaHome}>
                                    Home
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/subscribers">
                                <Sidebar.Item icon={FaSubscript}>
                                    All Subscribers
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/trainers" >
                                <Sidebar.Item icon={HiUsers}>
                                    All Trainers
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/requests">
                                <Sidebar.Item icon={HiInbox}>
                                    Applied Trainers
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/balance">
                                <Sidebar.Item icon={HiChartPie}>
                                    Balance
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/add&class">
                                <Sidebar.Item icon={HiViewGridAdd}>
                                    Add Classes
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/add&post" >
                                <Sidebar.Item icon={HiUsers}>
                                    Add Post
                                </Sidebar.Item>
                            </NavLink>
                        </Sidebar.ItemGroup>
                    }
                    {
                        isTrainer &&
                        <Sidebar.ItemGroup className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-1 items-center">
                            <NavLink className="w-full" to="/">
                                <Sidebar.Item icon={FaHome}>
                                    Home
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink className="w-full" to="/dashboard/manage&slots">
                                <Sidebar.Item icon={HiMenuAlt1}>
                                    Manage Slots
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/new&slots">
                                <Sidebar.Item icon={FaSubscript}>
                                    Add Slots
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/add&post" >
                                <Sidebar.Item icon={HiUsers}>
                                    Add Post
                                </Sidebar.Item>
                            </NavLink>
                        </Sidebar.ItemGroup>
                    }
                    {
                        users.role === 'member' &&
                        <Sidebar.ItemGroup>
                            <NavLink className="w-full" to="/">
                                <Sidebar.Item icon={FaHome}>
                                    Home
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink className="w-full" to="/dashboard/profile">
                                <Sidebar.Item icon={HiMenuAlt1}>
                                    Profile
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/booked&trainer">
                                <Sidebar.Item icon={FaSubscript}>
                                    Booked Trainer
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/activity&log" >
                                <Sidebar.Item icon={HiUsers}>
                                    Activity Log
                                </Sidebar.Item>
                            </NavLink>
                        </Sidebar.ItemGroup>
                    }

                    {
                        !users.role &&
                        <Sidebar.ItemGroup>
                            <NavLink className="w-full" to="/">
                                <Sidebar.Item icon={FaHome}>
                                    Home
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink className="w-full" to="/dashboard/profile">
                                <Sidebar.Item icon={HiMenuAlt1}>
                                    Profile
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/booked&trainer">
                                <Sidebar.Item icon={FaSubscript}>
                                    Booked Trainer
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/activity&log" >
                                <Sidebar.Item icon={HiUsers}>
                                    Activity Log
                                </Sidebar.Item>
                            </NavLink>
                        </Sidebar.ItemGroup>
                    }


                </Sidebar.Items>
            </Sidebar>
            <div className="lg:w-4/5">
                <Outlet />
            </div>
        </div>

    );
};

export default Dashboard;