import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from './Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    console.log(user, loading)
    const location = useLocation()
    if (loading) {
        return <div className="w-full"><span className="mx-auto loading loading-spinner loading-lg"></span></div>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};


PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;