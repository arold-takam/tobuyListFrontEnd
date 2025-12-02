import InputNumber from "../general/inputNumber/InputNumber.jsx";
import {Link} from "react-router-dom";


export default function FormTransfer()
{
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
                <select name="type" id="type">
                    <option value="" disabled selected>Choisir ici(Click)</option>
                    <option value="WITHDRAWAL">RETRAIT</option>
                    <option value="TRANSFER">TRANSFERT</option>
                    <option value="SHOPPING">SHOPPING</option>
                </select>
            </div>
            <InputNumber />
            <button type="submit" className="validate">VALIDER</button>
        </form>
    )
}