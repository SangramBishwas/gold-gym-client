import { Outlet } from "react-router-dom";

import Nav from "./Nav";
import Footeer from "./Footeer";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet />
            <Footeer></Footeer>
        </div>
    );
};

export default Root;