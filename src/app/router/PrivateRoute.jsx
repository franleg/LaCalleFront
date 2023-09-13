import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = ({ children }) => {

    const isAuthenticated = useAuth();

    const { pathname, search } =useLocation();

    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath);

    return (isAuthenticated)
        ? children
        : <Navigate to="/session" />
}
