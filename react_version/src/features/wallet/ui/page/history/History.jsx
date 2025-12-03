import {useState} from "react";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import './History.css'
import BottomHeader from "../../componant/general/bottomHeader/BottomHeader.jsx";
import Header from "../../componant/general/header/Header.jsx";
import MainMenu from "../../componant/general/mainMenu/MainMenu.jsx";
import TransactionStory from "../../componant/historyComp/TransactionStory.jsx";
import Hero from "../../componant/general/hero/Hero.jsx"
import storyImg from "../../../../../assets/images/story.png";


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

            <Hero>
                <h1>
                    HISTORIQUE DES TRANSACTIONS
                </h1>
                <figure>
                    <img src={storyImg || "#"} alt="history picture"/>
                </figure>
            </Hero>
            <TransactionStory />
            <BottomHeader />
        </div>
    );
}