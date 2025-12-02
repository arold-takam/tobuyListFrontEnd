import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import {useState} from "react";
import './Profile.css';

import MainMenu from "../../componant/general/mainMenu/MainMenu.jsx";
import Header from "../../componant/general/header/Header.jsx";
import BottomHeader from "../../componant/general/bottomHeader/BottomHeader.jsx";

import HeroProfile from "../../componant/profileComp/HeroProfile.jsx";
import InfoLine from "../../componant/profileComp/InfoLine.jsx";
import LogoutBtn from "../../componant/profileComp/LogoutBtn.jsx";
import AccountZone from "../../componant/profileComp/AccountZone.jsx";
import ManageZone from "../../componant/profileComp/ManageZone.jsx";

export default function Profile() {
    const [activeMenu, setActiveMenu] = useState("");
    const {isAuthenticated, user} = useAuth();

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
        <div className="profile">
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose} />
            <Header handleMainMenu={handleMainMenu} />
            <main>
                <HeroProfile user={user} />
                <InfoLine user={user} />
                {user.roleName !== "CLIENT" ? <AccountZone /> : <ManageZone />}
                <LogoutBtn />
                <BottomHeader />
            </main>
        </div>
    );
}