import './confirmTransaction.css'
import MainMenu from "../../componant/general/mainMenu/MainMenu.jsx";
import Header from "../../componant/general/header/Header.jsx";
import {Link} from "react-router-dom";
import ValidateButton from "../../componant/general/validateButton/ValidateButton.jsx";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import {useState} from "react";
import Hero from "../../componant/general/hero/Hero.jsx";
import confirm from "../../../../../assets/images/check_circle.png";
import BottomHeader from "../../componant/general/bottomHeader/BottomHeader.jsx";

export default function ConfirmTransaction(){

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

    return (
        <div className="confirmRefund">
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose}/>
            <Header handleMainMenu={handleMainMenu}/>
            <Hero>
                <h1>VALIDER CETTE TRANSACTION</h1>
                <figure>
                    <img src={confirm || ""} alt="validation image"/>
                </figure>
            </Hero>
            <form className="passForm">
                <div className="put">
                    <label htmlFor="pass">Enter your password</label>
                    <input type="password" name="pass" id="pass" className="pass" required/>
                </div>
                <ValidateButton>
                    <Link to="/successTransaction" className="button">
                        CONFIRMER
                    </Link>
                </ValidateButton>
            </form>
            <BottomHeader/>
        </div>
    );
}