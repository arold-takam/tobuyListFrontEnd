import InputNumber from "../general/inputNumber/InputNumber.jsx";
import {Link} from "react-router-dom";
import ValidateButton from "../general/validateButton/ValidateButton.jsx";

export default function FormRefund() {
    return (
        <form className="refundForm">
            <div className="put">
                <label htmlFor="amount">Entrer Le Montant Du Remboursement</label>
                <input type="number" name="amount" id="amount" className="amount" min="0" required/>
            </div>
            <div className="details">
                <label htmlFor="description">
                    Associez Une Description A Votre Remboursement
                </label>
                <textarea name="description" id="description"></textarea>
            </div>
            <InputNumber />
            <ValidateButton>
                <Link to={`/confirm`} className="button">
                    VALIDER
                </Link>
            </ValidateButton>
        </form>
    );
}