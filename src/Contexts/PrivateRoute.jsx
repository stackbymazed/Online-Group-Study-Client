import React, { use } from 'react';

import { Navigate, useLocation} from 'react-router';
import { AuthContext } from './AuthContext';
import Loading from './Loading';


const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext)
    const location = useLocation()
    console.log((location));

    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname}  to="/signin"></Navigate>;
};

export default PrivateRoute;