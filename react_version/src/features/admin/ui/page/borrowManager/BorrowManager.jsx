import '../profileManage/ProfileManage.css';
import {useState} from "react";
import MainMenu from "../../../../wallet/ui/componant/general/mainMenu/MainMenu.jsx";
import Header from "../../../../wallet/ui/componant/general/header/Header.jsx";
import BottomHeader from "../../../../wallet/ui/componant/general/bottomHeader/BottomHeader.jsx";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import Hero from "../../../../wallet/ui/componant/general/hero/Hero.jsx";
import userProfil from "../../../../../assets/images/userProfile.png";
import borrowIcon from '../../../../../assets/images/pret.png';
import {Link} from "react-router-dom";

export default function BorrowManager() {
    const [activeMenu, setActiveMenu] = useState("");
    const {isAuthenticated} = useAuth();
    const num = ["Tout","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

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
            <main>
                <Hero>
                    <h1>GESTION DES EMPRUNTS</h1>
                    <figure>
                        <img src={borrowIcon || "#"} alt="Account picture"/>
                    </figure>
                </Hero>
                <div className="accountList">
                    <div className="filter">
                        <h2>Liste des emprunts</h2>
                        <ul>
                            {
                                num.map((n,index) => (
                                    <li key={index}>{n}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <ul className="list">
                        <li>
                            <Link to={'/borrowHistory'} href="#" className={"linkProfile"}>
                                <img src={userProfil || ""} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/borrowHistory'} href="#" className={"linkProfile"}>
                                <img src={userProfil || ""} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/borrowHistory'} href="#" className={"linkProfile"}>
                                <img src={userProfil || ""} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/borrowHistory'} href="#" className={"linkProfile"}>
                                <img src={userProfil || ""} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/borrowHistory'} href="#" className={"linkProfile"}>
                                <img src={userProfil || ""} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/borrowHistory'} href="#" className={"linkProfile"}>
                                <img src={userProfil || ""} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/borrowHistory'} href="#" className={"linkProfile"}>
                                <img src={userProfil || ""} alt="profile picture"/>
                                <p>The username</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/borrowHistory'} href="#" className={"linkProfile"}>
                                <img src={userProfil || ""} alt="profile picture"/>
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