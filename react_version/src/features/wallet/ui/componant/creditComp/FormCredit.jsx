import ValidateButton from "../general/validateButton/ValidateButton.jsx";
import {Link} from "react-router-dom";
import OfferType from "./OfferType.jsx";
import InputNumber from "../general/inputNumber/InputNumber.jsx";

export default function FormCredit() {
    return (
        <form className="borrowForm">
            <div className="details">
                <label htmlFor="description">Associez Une Description A Votre Transfert</label>
                <textarea name="description" id="description"></textarea>
            </div>
            <OfferType />
            <InputNumber />
            <ValidateButton>
                <Link to={`/confirm`} className="button">
                    VALIDER
                </Link>
            </ValidateButton>
        </form>
    );
}