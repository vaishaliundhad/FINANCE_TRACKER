import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
     const {curuser}=useAuth();
     return curuser ? children : <Navigate  to="/login"/>
};

export default PrivateRoute;