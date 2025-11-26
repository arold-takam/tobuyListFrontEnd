import BottomHeader from "../general/bottomHeader/BottomHeader.jsx";

import logoutIcon from '../../../../../assets/images/logout.png';
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import {useNavigate} from "react-router-dom";

export default function LogoutBtn(){
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setTimeout(()=>{
            logout();

            navigate('/');
        }, 300);
    }

    return (
        <section className="logout">
            <a onClick={handleLogout}>
                <p>DÉCONNEXION</p>
                <img src={logoutIcon} alt="logout icon"/>
            </a>
        </section>
    );
}