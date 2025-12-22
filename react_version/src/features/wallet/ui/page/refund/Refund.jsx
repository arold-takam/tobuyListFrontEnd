import {useState} from "react";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import Header from "../../componant/general/header/Header.jsx";
import MainMenu from "../../componant/general/mainMenu/MainMenu.jsx";
import './Refund.css';
import BottomHeader from "../../componant/general/bottomHeader/BottomHeader.jsx";
import Hero from "../../componant/general/hero/Hero.jsx";
import refund from "../../../../../assets/images/Remboursement.png";
import BorrowInfo from "../../componant/refundComp/BorrowInfo.jsx";
import FormRefund from "../../componant/refundComp/FormRefund.jsx";

export default function Refund(){

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
        <div className="refund">
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose}/>
            <Header handleMainMenu={handleMainMenu}/>
            <Hero>
                <h1>REMBOURSER UN PRET</h1>
                <figure>
                    <img src={refund || ""} alt="refund logo"/>
                </figure>
            </Hero>
            <BorrowInfo />
            <FormRefund />
            <BottomHeader/>
        </div>
    )
}