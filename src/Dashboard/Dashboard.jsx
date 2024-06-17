import { Sidebar } from "flowbite-react";
import { Toaster } from "react-hot-toast";
import { FaHome, FaSubscript } from "react-icons/fa";
import { HiChartPie, HiInbox, HiUsers, HiViewGridAdd } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {
    const [isAdmin] = useAdmin();
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
                        isAdmin ? <>
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
                            </Sidebar.ItemGroup>
                        </> : <>No Admin here</>
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