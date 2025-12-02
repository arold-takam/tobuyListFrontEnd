
import Header from "../../componant/general/header/Header.jsx";
import {Link} from "react-router-dom";
import story from "../../../../../assets/images/story.png";
import "./SucccessPage.css";

export default function Success() {
    return (
        <div className="success">
            <Header />
            <section className="mainFrame">
                <div className="message">
                    <p>TRANSACTION EFFECTUÉE AVEC SUCCÈS !</p>
                </div>
                <Link to={'/home'} className="cta">
                    RETOUR A LA PAGE D'ACCUEIL
                </Link>
                <div className="notice">
                    <img src={story || ""} alt="story"/>
                    <p>
                        Vous pouvez consulter l'historique de vos transactions pour suivre vos operations.
                    </p>
                </div>
            </section>
        </div>
    )

}