import logoutIcon from '../../../../../assets/images/logout.png';
import useLogout from "../../../infrastructure/LogoutService.js";

export default function LogoutBtn(){

    const logout = useLogout();

    return (
        <section className="logout">
            <a onClick={logout}>
                <p>DÉCONNEXION</p>
                <img src={logoutIcon} alt="logout icon"/>
            </a>
        </section>
    );
}