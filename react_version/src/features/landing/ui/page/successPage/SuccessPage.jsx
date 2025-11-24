import './SuccessPage.css';
import storyIcon from '../../../../../assets/images/story.png';
import {Link, useLocation} from "react-router-dom";

export default function SuccessPage(){
    const location = useLocation();
    const smsAuth = location.state;
    if (!smsAuth || !smsAuth.user) {
        return <div>Erreur : Veuillez revenir à la page précédente.</div>;
    }

    return (
        <div className="successPage">
            <section className="mainFrame">
                <div className="message">
                    <p>{smsAuth.message} for {smsAuth.user.username}</p>
                </div>
                <Link to="/home" state={{dataAuth: smsAuth.user}} className="cta">ALLER A LA PAGE D'ACCUEIL</Link>
                <div className="notice">
                    <img src={storyIcon} alt="story"/>
                    <p>Vous pouvez consulter l'historique de vos transactions pour suivre vos operations.</p>
                </div>
            </section>
        </div>
    );
}