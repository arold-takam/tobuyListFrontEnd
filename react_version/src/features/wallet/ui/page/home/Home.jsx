import './Home.css';
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import {useState} from "react";

import MainMenu from "../../componant/general/mainMenu/MainMenu.jsx";
import Header from "../../componant/general/header/Header.jsx";
import BottomHeader from "../../componant/general/bottomHeader/BottomHeader.jsx";
import CardSide from "../../componant/homeComp/CardSide.jsx";
import TransactList from "../../componant/homeComp/TransactList.jsx";
import InfoList from "../../componant/homeComp/InfoList.jsx";


export default function Home() {
    const {isAuthenticated, user} = useAuth();
    if (!isAuthenticated) {
        return <div>Erreur : Veuillez revenir à la page précédente.</div>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeMenu, setActiveMenu] = useState("");

    const handleMainMenu = () => {
        setActiveMenu("active");
    }
    const handleMenuClose = () => {
        setActiveMenu("");
    }

    return (
        <div className={`home`}>
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose} />
            <Header handleMainMenu={handleMainMenu} />
            <main>
                {user.roleName === 'ADMIN' ?
                    <div className="adminSide">
                        <h1>Welcome dear Admin</h1>
                        <p>You can access to manage panel in your profile page.</p>
                    </div>
                    :
                    <div className="clientSide">
                        <CardSide />
                        <TransactList />
                    </div>
                }
                <InfoList />
                <BottomHeader />
            </main>
        </div>
    );
}