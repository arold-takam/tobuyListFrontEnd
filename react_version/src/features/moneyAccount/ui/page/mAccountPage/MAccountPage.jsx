import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import './MAccountPage.css';

import eyeOpen from '../../../../../assets/images/eyeOpen.png';
import eyecloed from '../../../../../assets/images/eyeClosed.png';
import updateIcon from '../../../../../assets/images/Crayon.png';
import deleteIcon from '../../../../../assets/images/delete.png';
import Header from "../../../../wallet/ui/componant/general/header/Header.jsx";
import BottomHeader from "../../../../wallet/ui/componant/general/bottomHeader/BottomHeader.jsx";
import MainMenu from "../../../../wallet/ui/componant/general/mainMenu/MainMenu.jsx";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";

export default function MAccountPage() {
    const {isAuthenticated} = useAuth();
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

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
    const {imgIcon, number} = location.state || {};

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log(imgIcon, number);
    }, [imgIcon, number]);

    return (
            <div className="mAccountPage">
                <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose} />
                <Header handleMainMenu={handleMainMenu} />
                <main>
                    <section className="upAccount">
                        <h1>MTN</h1>
                        <p>Mobile Money</p>
                    </section>
                    <div className="card">
                        <div className="top">
                            <h1>Solde actuelle</h1>
                            <img src={eyeOpen} alt="eye"/>
                        </div>
                        <div className="middle">
                            <h2>* * * * *</h2>
                            <span>FCFA</span>
                        </div>
                        <div className="bottom">
                            <button type="button" className="depositAccount">Depot</button>
                            <button type="button" className="withdrawAccount">Retrait</button>
                        </div>
                    </div>
                    <section className="infoLine">
                        <div className="top">
                            <h2>A Propos De Ce Compte</h2>
                            <a href="#" className="updateBtn">
                                <p>MODIFIER</p>
                                <figure><img src={updateIcon} alt="pencil"/></figure>
                            </a>
                        </div>
                        <div className="line">
                            <ul>
                                <li>
                                    <p>Name</p>
                                    <b>MTN Mobile Money</b>
                                </li>
                                <li>
                                    <p>Numero de compte</p>
                                    <b>{number}</b>
                                </li>
                                <li className="pass">
                                    <div className="left">
                                        <p>Password</p>
                                        <b>********</b>
                                    </div>
                                    <div className="right"><img src={eyeOpen} alt="see button"/></div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="deleteAccount">
                        <a href="#">
                            <p>SUPPRIMER CE COMPTE</p>
                            <img src={deleteIcon} alt="waste icon"/>
                        </a>
                    </section>
                    <BottomHeader />
                </main>
        </div>
    );
}