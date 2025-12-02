import {useState} from "react";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import Header from "../../componant/general/header/Header.jsx";
import MainMenu from "../../componant/general/mainMenu/MainMenu.jsx";
import './transfer.css';
import BottomHeader from "../../componant/general/bottomHeader/BottomHeader.jsx";
import HeroTransfer from "../../componant/transferComp/HeroTransfer.jsx";
import FormTransfer from "../../componant/transferComp/FormTransfer.jsx";
import qrcode from '../../../../../assets/images/qr_code_scanner.png';
export default function Transfer(){

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
        <div className="transfer">
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose}/>
            <Header handleMainMenu={handleMainMenu}/>
            <HeroTransfer/>
            <FormTransfer/>
            <BottomHeader/>
            <section className="scan">
                <div className="text">
                    <h4>Ou</h4>
                    <p>
                        Vous Pouvez faire plus vite avec notre <b>FASTSCAN !</b>
                    </p>
                </div>
                <a href="#" className="scanItem">
                    <figure>
                        <img src={qrcode || ""} alt="qrCode"/>
                    </figure>
                    <h5>Transférer par Scan</h5>
                </a>
            </section>
        </div>
    )
}