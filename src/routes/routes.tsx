import React from "react";
import AuthenticatedRoutes from "./authenticated/stack";
import AuthRoutes from "./unhatenticated";

const Routes = () => {
    const isAuthenticated = true; 

    return isAuthenticated ? <AuthenticatedRoutes /> : <AuthRoutes />;
}

export { Routes };