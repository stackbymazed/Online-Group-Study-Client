import React, { use } from 'react';

import { Navigate} from 'react-router';
import { AuthContext } from './AuthContext';
import Loading from './Loading';


const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate  to="/signin"></Navigate>;
};

export default PrivateRoute;