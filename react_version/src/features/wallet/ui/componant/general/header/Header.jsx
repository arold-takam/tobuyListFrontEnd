import {Link} from "react-router-dom";
import './Header.css';

import notifications from "../../../../../../assets/images/notifications.png";
import imgLogo from "../../../../../../assets/images/imgLogo.png";
import menuOpen from "../../../../../../assets/images/menuOpen.png";

export default function Header({handleMainMenu}) {
    return (
        <header>
            <figure className="menu" onClick={handleMainMenu}><img src={menuOpen} alt="menu"/></figure>
            <Link to="/home" className="logo">
                <img src={imgLogo} alt="logo"/>
                <div className="mark">ToBuyList</div>
            </Link>
            <figure className="notify"><img src={notifications} alt="notifications"/></figure>
        </header>
    )
}