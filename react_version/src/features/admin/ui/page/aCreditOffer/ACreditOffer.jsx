import './ACreditOffer.css';
import {useState} from "react";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import MainMenu from "../../../../wallet/ui/componant/general/mainMenu/MainMenu.jsx";
import Header from "../../../../wallet/ui/componant/general/header/Header.jsx";
import BottomHeader from "../../../../wallet/ui/componant/general/bottomHeader/BottomHeader.jsx";
import Hero from "../../../../wallet/ui/componant/general/hero/Hero.jsx";
import creditOfferImg from "../../../../../assets/images/creditOfferIcon.png";

export default function ACreditOffer (){
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
        <section className="aCreditOffer">
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose} />
            <Header handleMainMenu={handleMainMenu} />
            <main>
                <Hero>
                    <h1>
                        GESTION DES OFFRES DE CREDITS
                    </h1>
                    <figure>
                        <img src={creditOfferImg || "#"} alt="history picture"/>
                    </figure>
                </Hero>
                <ul className="screen">
                    <li className="offer">
                        <ul className="criteria">
                            <li>
                                <b>TYPE:</b>
                                <p>STANDARD</p>
                            </li>
                            <li>
                                <b>AMOUNT:</b>
                                <p>****FCFA</p>
                            </li>
                            <li>
                                <b>DELAY:</b>
                                <p>***Days</p>
                            </li>
                            <li>
                                <b>TAX AFTER DELAY:</b>
                                <p>****%</p>
                            </li>
                        </ul>
                    </li>
                    <li className="offer">
                        <ul className="criteria">
                            <li>
                                <b>TYPE:</b>
                                <p>STANDARD</p>
                            </li>
                            <li>
                                <b>AMOUNT:</b>
                                <p>****FCFA</p>
                            </li>
                            <li>
                                <b>DELAY:</b>
                                <p>***Days</p>
                            </li>
                            <li>
                                <b>TAX AFTER DELAY:</b>
                                <p>****%</p>
                            </li>
                        </ul>
                    </li>
                    <li className="offer">
                        <ul className="criteria">
                            <li>
                                <b>TYPE:</b>
                                <p>STANDARD</p>
                            </li>
                            <li>
                                <b>AMOUNT:</b>
                                <p>****FCFA</p>
                            </li>
                            <li>
                                <b>DELAY:</b>
                                <p>***Days</p>
                            </li>
                            <li>
                                <b>TAX AFTER DELAY:</b>
                                <p>****%</p>
                            </li>
                        </ul>
                    </li>
                </ul>
                <BottomHeader />
                <a type="button" className="addMore">AJOUTER UNE OFFRE</a>
            </main>
        </section>
    );
}