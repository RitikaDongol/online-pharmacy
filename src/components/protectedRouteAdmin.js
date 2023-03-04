import { Navigate } from "react-router-dom";

function PrivateRouteAdmin({children}){
    var isAuth;
    if(localStorage.getItem('ticket') && localStorage.getItem('userType')==='Admin'){
        isAuth=true
    }
    else{
        isAuth = false
    }
    return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRouteAdmin;