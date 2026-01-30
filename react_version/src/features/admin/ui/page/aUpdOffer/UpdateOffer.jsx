import './UpdateOffer.css';
import {Link} from "react-router-dom";
import imgLogo from "../../../../../assets/images/imgLogo.png";

export default function UpdateOffer() {
    return (
        <section className="updateOffer">
            <div className="top">
                <Link to="/home" className="logo">
                    <img src={imgLogo} alt="logo"/>
                </Link>
                <h1>Modifier cet offre</h1>
            </div>
            <form className="upd">
                <div className="field">
                    <label htmlFor="type">Changer de type</label>
                    <select name="type" id="type" className="type">
                        <option value="default" selected disabled>--(Cliquez Ici)--</option>
                        <option value="VIP">VIP</option>
                        <option value="STANDARD">Standard</option>
                        <option value="CUSTOM">Custom</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="amount">Entrer le nouveau montant</label>
                    <input type="number" value="limitationCreditAmount" id="amount"/>
                </div>
                <div className="field">
                    <label htmlFor="delai">Entrer le nouveau delai</label>
                    <input type="number" value="creditDelay" id="delai"/>
                </div>
                <div className="field">
                    <label htmlFor="taxe">Entrer la nouvelle taxe</label>
                    <input type="number" value="taxAfterDelay" id="taxe"/>
                </div>
                <div className="cta">
                    <Link to={'/crud_offer'} type="button" className={'back'}>RETOURNER</Link>
                    <button type="submit" className="go">MODIFIER</button>
                </div>
            </form>
        </section>
    );
}