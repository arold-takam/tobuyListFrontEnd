import {useState} from "react";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import Header from "../../componant/general/header/Header.jsx";
import MainMenu from "../../componant/general/mainMenu/MainMenu.jsx";
import './credit.css';
import BottomHeader from "../../componant/general/bottomHeader/BottomHeader.jsx";
import Hero from "../../componant/general/hero/Hero.jsx";
import creditLogo from "../../../../../assets/images/pret.png";
import FormCredit from "../../componant/creditComp/FormCredit.jsx";

export default function Credit(){

    const {isAuthenticated} = useAuth();
    const [activeMenu, setActiveMenu] = useState("");

    if (!isAuthenticated) {
        return <div>Erreur : Veuillez revenir à la page précédente.</div>;
    }

    const handleMainMenu = () => {
        setActiveMenu("active");
    }
    const handleMenuClose = () => {
        setActiveMenu("");
    }

    return(
        <div className="credit">
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose}/>
            <Header handleMainMenu={handleMainMenu}/>
            <Hero>
                <h1>OBTENIR UN PRET</h1>
                <figure>
                    <img src={creditLogo || ""} alt="deposit"/>
                </figure>
            </Hero>
            <FormCredit/>
            <BottomHeader/>
        </div>
    )
}