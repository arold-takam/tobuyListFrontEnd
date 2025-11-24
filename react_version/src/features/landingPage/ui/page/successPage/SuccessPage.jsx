import './SuccessPage.css';
import storyIcon from '../../../../../assets/images/story.png';
import {Link, useLocation} from "react-router-dom";

export default function SuccessPage(){
    const location = useLocation();
    const smsAuth = location.state;
    if (!smsAuth) {
        return <div>Erreur : Veuillez revenir à la page précédente.</div>;
    }

    return (
        <div className="successPage">
            <section className="mainFrame">
                <div className="message">
                    <p>{smsAuth}</p>
                </div>
                <Link to="/home" className="cta">RETOUR A LA PAGE D'ACCUEIL</Link>
                <div className="notice">
                    <img src={storyIcon} alt="story"/>
                    <p>Vous pouvez consulter l'historique de vos transactions pour suivre vos operations.</p>
                </div>
            </section>
        </div>
    );
}