import React from "react";
import { useRoutes } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import FormRegister from "../components/FormRegister";

const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/login", element: <Login /> },
        { path: "/register", element: <FormRegister /> },
        { path: "/", element: <Home /> },

    ]) 

    return routes;
}

export default AppRoutes;
