import InputNumber from "../general/inputNumber/InputNumber.jsx";
import ValidateButton from "../general/validateButton/ValidateButton.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";


export default function FormTransfer()
{
    const [selectedMethodIndex, setSelectedMethodIndex] = useState(0);
    const [accountNumber, setAccountNumber] = useState("");

    function handleSubmit(){
        //to implement later
    }

    return (
        <form className ="transfertForm" onSubmit={handleSubmit}>
            <div className="put">
                <label htmlFor="amount">Entrer Le Montant Du Transfert</label>
                <input type="number" name="amount" id="amount" className="amount" min="0" required />
            </div>
            <div className="details">
                <label htmlFor="description" >Associez Une Description A Votre Transfert</label>
                <textarea name="description" id="description"></textarea>
            </div>
            <div className="typeTransfert">
                <label htmlFor="type">Quel Type De Transfert Souhaitez-Vous Faire?</label>
                <select name="type" id="type" defaultValue="">
                    <option value="" disabled>Choisir ici(Click)</option>
                    <option value="WITHDRAWAL">RETRAIT</option>
                    <option value="TRANSFER">TRANSFERT</option>
                    <option value="SHOPPING">SHOPPING</option>
                </select>
            </div>
            <InputNumber
                selectedMethodIndex={selectedMethodIndex}
                onMethodChange={setSelectedMethodIndex}
                accountNumber={accountNumber}
                onAccountNumberChange={setAccountNumber}/>
            <ValidateButton>
                <Link to={`/successTransaction`} className="button">
                    VALIDER
                </Link>
            </ValidateButton>
        </form>
    )
}