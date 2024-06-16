import { Sidebar } from "flowbite-react";
import { Toaster } from "react-hot-toast";
import { FaHome, FaSignOutAlt, FaSubscript } from "react-icons/fa";
import { HiChartPie, HiInbox, HiUser, HiUsers, HiViewGridAdd } from "react-icons/hi";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="m-5 md:m-10 lg:mx-20 flex flex-col lg:flex-row lg:gap-10">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Sidebar className="w-full lg:w-1/5 text-xl md:text-2xl font-bold" aria-label="Sidebar with logo branding example">
                GoldGYM
                <Sidebar.Items className="lg:py-3">
                    <Sidebar.ItemGroup className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-1 items-center">
                        <Sidebar.Item href="/" icon={FaHome}>
                            Home
                        </Sidebar.Item>
                        <Sidebar.Item href="/dashboard/subscribers" icon={FaSubscript}>
                            All Subscribers
                        </Sidebar.Item>
                        <Sidebar.Item href="/dashboard/trainers" icon={HiUsers}>
                            All Trainers
                        </Sidebar.Item>
                        <Sidebar.Item href="/dashboard/requests" icon={HiInbox}>
                            Applied Trainers
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser}>
                            Members
                        </Sidebar.Item>
                        <Sidebar.Item href="/dashboard/balance" icon={HiChartPie}>
                            Balance
                        </Sidebar.Item>
                        <Sidebar.Item href="/dashboard/add&class" icon={HiViewGridAdd}>
                            Add Classes
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={FaSignOutAlt}>
                            Sign Out
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
            <div className="lg:w-4/5">
                <Outlet />
            </div>
        </div>

    );
};

export default Dashboard;