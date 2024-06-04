import { Navigate, useLocation } from "react-router";
import useAuth from "../components/hooks/useAuth";
import { Spinner } from "react-bootstrap";


const PrivateRoute = ({ children }) => {
    
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return  <Spinner animation="border" variant="danger" />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;