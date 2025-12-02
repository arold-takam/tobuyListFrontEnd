import InputNumber from "../general/inputNumber/InputNumber.jsx";
import {Link} from "react-router-dom";


export default function DepositForm()
{
    function handleSubmit(){
        //to implement later
    }

   return (
       <form onSubmit={handleSubmit}>
            <div className="put">
                <label htmlFor="amount">Entrer Le Montant Du Depot</label>
                <input type="number" name="amount" id="amount" className="amount" min="0" required/>
            </div>
            <div className="details">
                <label htmlFor="details">Associer Une Description a Votre Dépot</label>
                <textarea name="details" id="details"></textarea>
            </div>
            <InputNumber />
            <button type="submit" className="validate">
                <Link to={`/successTransaction`} className="button">
                    VALIDER
                </Link>
            </button>
       </form>
   )
}

