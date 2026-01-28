import './ProfileManage.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import MainMenu from "../../../../wallet/ui/componant/general/mainMenu/MainMenu.jsx";
import Header from "../../../../wallet/ui/componant/general/header/Header.jsx";
import BottomHeader from "../../../../wallet/ui/componant/general/bottomHeader/BottomHeader.jsx";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import Hero from "../../../../wallet/ui/componant/general/hero/Hero.jsx";
import userProfil from "../../../../../assets/images/userProfile.png";
import manageAccount from "../../../../../assets/images/manage_accounts.png";

export default function ProfileManage() {
    const [activeMenu, setActiveMenu] = useState("");
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        return <div>Erreur : Veuillez revenir à la page précédente.</div>;
    }

    const handleMainMenu = () => {
        setActiveMenu("active");
    }
    const handleMenuClose = () => {
        setActiveMenu("");
    }

    return (
        <div className={"profileManage"}>
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose} />
            <Header handleMainMenu={handleMainMenu} />
            <Hero>
                <h1>GESTION DES COMPTES</h1>
                <figure>
                    <img src={manageAccount || "#"} alt="Account picture"/>
                </figure>
            </Hero>
            <main>
                <div className="accountList">
                    <div className="filter">
                        <h2>Liste des comptes</h2>
                        <ul>
                            <li className={'active'}>Tout</li>
                            <li>A</li>
                            <li>B</li>
                            <li>C</li>
                            <li>D</li>
                            <li>E</li>
                            <li>F</li>
                            <li>G</li>
                            <li>H</li>
                            <li>I</li>
                            <li>J</li>
                            <li>K</li>
                            <li>L</li>
                            <li>M</li>
                            <li>N</li>
                            <li>O</li>
                            <li>P</li>
                            <li>Q</li>
                            <li>R</li>
                            <li>S</li>
                            <li>T</li>
                            <li>U</li>
                            <li>V</li>
                            <li>W</li>
                            <li>X</li>
                            <li>Y</li>
                            <li>Z</li>
                        </ul>
                    </div>
                    <ul className="list">
                        <li>
                            <Link to={'/profile_info'} href="#" className={"linkProfile"}>
                                <img src={userProfil} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile_info'} href="#" className={"linkProfile"}>
                                <img src={userProfil} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile_info'} href="#" className={"linkProfile"}>
                                <img src={userProfil} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile_info'} href="#" className={"linkProfile"}>
                                <img src={userProfil} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile_info'} href="#" className={"linkProfile"}>
                                <img src={userProfil} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile_info'} href="#" className={"linkProfile"}>
                                <img src={userProfil} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile_info'} href="#" className={"linkProfile"}>
                                <img src={userProfil} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile_info'} href="#" className={"linkProfile"}>
                                <img src={userProfil} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile_info'} href="#" className={"linkProfile"}>
                                <img src={userProfil} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile_info'} href="#" className={"linkProfile"}>
                                <img src={userProfil} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile_info'} href="#" className={"linkProfile"}>
                                <img src={userProfil} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <BottomHeader />
            </main>
        </div>
    );
}