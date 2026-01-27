import './CrudOffer.css';
import {useState} from "react";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import MainMenu from "../../../../wallet/ui/componant/general/mainMenu/MainMenu.jsx";
import Header from "../../../../wallet/ui/componant/general/header/Header.jsx";
import BottomHeader from "../../../../wallet/ui/componant/general/bottomHeader/BottomHeader.jsx";
import Hero from "../../../../wallet/ui/componant/general/hero/Hero.jsx";
import creditOfferImg from "../../../../../assets/images/creditOfferIcon.png";
import {Link} from "react-router-dom";

export default function CrudOffer(){
    const [activeMenu, setActiveMenu] = useState("");
    const {isAuthenticated, user} = useAuth();

    if (!isAuthenticated) {
        return <div>Erreur : Veuillez revenir à la page précédente.</div>;
    }

    const handleMainMenu = () => {
        setActiveMenu("active");
    }
    const handleMenuClose = () => {
        setActiveMenu("");
    }

    const handleDelete = () => {
        const pass = prompt('(Surpression)Entez votre mot de pass: ');
        if (!pass || pass !== user.password) {
            alert("Erreur lors de la suppression !");
            return;
        }

        alert("La suppression sera implementee ici...");
    }

    return (
        <section className="crudOffer">
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose} />
            <Header handleMainMenu={handleMainMenu} />
            <main>
                <Hero>
                    <h1>
                        TITRE DE L'OFFRE DE CREDIT
                    </h1>
                    <figure>
                        <img src={creditOfferImg || "#"} alt="history picture"/>
                    </figure>
                </Hero>
                <div className="line">
                    <h1>A propos de cette offre</h1>
                    <div className="info">
                        <ul className="infoLine">
                            <li>
                                <p>AMOUNT</p>
                                <b>*******FCFA</b>
                            </li>
                            <li>
                                <p>DELAY</p>
                                <b>*******Days</b>
                            </li>
                            <li>
                                <p>TAX AFTER DELAY</p>
                                <b>*******%</b>
                            </li>
                        </ul>
                        <div className="cta">
                            <button type="button" className="del" onClick={handleDelete}>SUPPRIMER</button>
                            <Link to={'/update_offer'} type="button" className="upd">MODIFIER</Link>
                        </div>
                    </div>
                </div>
                <BottomHeader />
            </main>
        </section>
    );
}