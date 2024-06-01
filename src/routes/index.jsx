import React from "react";
import { useRoutes } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/login", element: <Login /> },
        { path: "/", element: <Home /> },
    ]) 

    return routes;
}

export default AppRoutes;
