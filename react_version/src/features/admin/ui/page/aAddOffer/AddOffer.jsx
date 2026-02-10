import './AddOffer.css';
import {Link} from "react-router-dom";
import imgLogo from "../../../../../assets/images/imgLogo.png";

export default function AddOffer() {
    return (
        <section className="addOffer">
            <div className="top">
                <Link to="/home" className="logo">
                    <img src={imgLogo} alt="logo"/>
                </Link>
                <h1>Ajouter une offre</h1>
            </div>
            <form className="add">
                <div className="field">
                    <label htmlFor="type">Choisir le type</label>
                    <select name="type" id="type" className="type" defaultValue = "default">
                        <option value="default" disabled>--(Cliquez Ici)--</option>
                        <option value="VIP">VIP</option>
                        <option value="STANDARD">Standard</option>
                        <option value="CUSTOM">Custom</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="amount">Entrer le montant</label>
                    <input type="number" value="limitationCreditAmount" id="amount"/>
                </div>
                <div className="field">
                    <label htmlFor="delai">Entrer le delai</label>
                    <input type="number" value="creditDelay" id="delai"/>
                </div>
                <div className="field">
                    <label htmlFor="taxe">Entrer la taxe</label>
                    <input type="number" value="taxAfterDelay" id="taxe"/>
                </div>
                <div className="cta">
                    <Link to={'/creditOffer_management'} type="button" className={'back'}>RETOURNER</Link>
                    <button type="submit" className="go">AJOUTER</button>
                </div>
            </form>
        </section>
    );
}