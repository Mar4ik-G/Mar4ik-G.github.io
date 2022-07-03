import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({ redirectPath, children,}) => {
    const isAllowed = useSelector(state => state.loginReducer.isAuth)

    if (isAllowed) {
        return children
    }
    return <Navigate to={redirectPath}/>;

};

export default PrivateRoute;