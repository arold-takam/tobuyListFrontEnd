import {useState} from "react";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import './History.css'
import BottomHeader from "../../componant/general/bottomHeader/BottomHeader.jsx";
import Header from "../../componant/general/header/Header.jsx";
import MainMenu from "../../componant/general/mainMenu/MainMenu.jsx";
import Hero from "../../componant/historyComp/Hero.jsx";
import TransactionStory from "../../componant/historyComp/TransactionStory.jsx";


export default function History() {

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
        <div className="story">
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose} />
            <Header handleMainMenu={handleMainMenu} />

            <Hero />
            <TransactionStory />
            <BottomHeader />
        </div>
    );
}