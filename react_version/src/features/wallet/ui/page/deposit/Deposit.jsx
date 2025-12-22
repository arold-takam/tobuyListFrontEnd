import {useState} from "react";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import Header from "../../componant/general/header/Header.jsx";
import MainMenu from "../../componant/general/mainMenu/MainMenu.jsx";
import './deposit.css';
import DepositForm from "../../componant/depositComp/DepositForm.jsx";
import BottomHeader from "../../componant/general/bottomHeader/BottomHeader.jsx";
import Hero from "../../componant/general/hero/Hero.jsx"
import tirelire from "../../../../../assets/images/Tirelire.png";

export default function Deposit(){

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
        <div className="deposit">
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose} />
            <Header handleMainMenu={handleMainMenu} />
            <Hero>
                <h1>FAIRE UN DEPOT</h1>
                <figure>
                    <img src={tirelire || ""} alt="deposit logo"/>
                </figure>
            </Hero>
            <DepositForm />
            <BottomHeader />
        </div>
    )
}