import './MainMenu.css'
import {Link} from "react-router-dom";

import imgLogo from '../../../../../../assets/images/imgLogo.png';
import userProfile from '../../../../../../assets/images/userProfile.png';
import notifications from '../../../../../../assets/images/notifications.png';
import gmail from '../../../../../../assets/images/gmail.png';
import facebook from '../../../../../../assets/images/facebook.png';
import whatsapp from '../../../../../../assets/images/whatsapp.png';
import instagram from '../../../../../../assets/images/instagram.png';
import x from '../../../../../../assets/images/x.png';
import linkedIn from '../../../../../../assets/images/linkedIn.png';
import youtube from '../../../../../../assets/images/youtube.png';
import settings from '../../../../../../assets/images/settings.png';
import logoutImg from '../../../../../../assets/images/logout.png';
import lightTheme from '../../../../../../assets/images/light.png';
import dark from '../../../../../../assets/../assets/images/dark.png';
import gift from '../../../../../../assets/../assets/images/gift.png';
import menuClose from '../../../../../../assets/images/menuClose.png';
import ratioUp from '../../../../../../assets/images/ratioUp.png';
import useLogout from "../../../../infrastructure/LogoutService.js";

export default function MainMenu({activeMenu, handleMenuClose}) {

    const logout = useLogout();

    return (
        <section className={`${activeMenu} mainMenu`}>
            <div className="top">
                <Link to={`/home`} className="logo">
                    <img src={imgLogo} alt="logo"/>
                    <div className="mark">ToBuyList</div>
                </Link>
                <figure className="menu" onClick={handleMenuClose}>
                    <img src={menuClose || ""} alt="menu"/>
                </figure>
            </div>
            <Link to={`/profile`} className="profile">
                <figure className="userProfile"><img src={userProfile || ""} alt="user"/></figure>
                <div className="userInfo">
                    <h1>Toto Le Cloone</h1>
                    <p><b>+15</b> transactions ce moi</p>
                </div>
                <img src={ratioUp || ""} alt="rate" className="rate"/>
            </Link>
            <nav>
                <a href="#" className="notify">
                    <figure className="notif"><img src={notifications} alt="notify"/></figure>
                    <p>Notifications</p>
                    <div className="rate">+25</div>
                </a>
                <a href="#" className="settings">
                    <figure className="set"><img src={settings} alt="settings"/></figure>
                    <p>Paramètres</p>
                </a>
                <a href="#" className="logout" onClick={logout}>
                    <figure className="logout"><img src= {logoutImg} alt="logout"/></figure>
                    <p>Logout</p>
                </a>
                <div className="theme">
                    <p>Light Mode</p>
                    <div className="mode">
                        <figure className="lightTheme active"><img src={lightTheme} alt="lightTheme"/>
                        </figure>
                        <figure className="dark"><img src={dark} alt="dark"/></figure>
                    </div>
                </div>
            </nav>
            <div className="gift">
                <figure className="surprise"><img src={gift} alt="gift"/></figure>
                <p>SURPRISE !</p>
            </div>
            <footer>
                <div className="footer-up">
                    <Link to={`/home`} className="logo">
                        <img src={imgLogo} alt="logo"/>
                        <div className="mark">ToBuyList</div>
                    </Link>
                </div>
                <div className="speech">
                    <i>La simplicité en une seule main.</i>
                </div>
                <div className="social">
                    <h2>Nous répondons aussi sur</h2>
                    <ul>
                        <li><img src={gmail} alt="gmail"/></li>
                        <li><img src={facebook} alt="facebook"/></li>
                        <li><img src={whatsapp} alt="whatsapp"/></li>
                        <li><img src={instagram} alt="instagram"/></li>
                        <li><img src={x} alt="x"/></li>
                        <li><img src={linkedIn} alt="linkedIn"/></li>
                        <li><img src={youtube} alt="youtube"/></li>
                    </ul>
                </div>
                <div className="legal">
                    <h2>Informations légales</h2>
                    <a href="#"><p><b>&gt;</b> Politique de confidentialité</p></a>
                    <a href="#"><p><b>&gt;</b> Service d'assistance client</p></a>
                    <a href="#"><p><b>&gt;</b> Consortiums & litiges</p></a>
                    <a href="#"><p><b>&gt;</b> FAQs</p></a>
                </div>
                <div className="bottom">
                    &copy; Copyright 2025, ToBuyList; All rights reserved.
                </div>
            </footer>
        </section>
    );
}