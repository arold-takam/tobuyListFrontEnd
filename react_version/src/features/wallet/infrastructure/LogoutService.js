import {useAuth} from "../../../contextGlobal/authContext/useAuth.js";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";


export default function useLogout() {

    const {logout} = useAuth();
    const navigate = useNavigate();

    return useCallback(() => {
        setTimeout(() => {
            logout();
            navigate("/", { replace: true });
        }, 300);
    }, [logout, navigate]);
}