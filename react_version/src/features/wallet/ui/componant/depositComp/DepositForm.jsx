import InputNumber from "../general/inputNumber/InputNumber.jsx";
import {Link} from "react-router-dom";
import ValidateButton from "../general/validateButton/ValidateButton.jsx";
import {useState} from "react";


export default function DepositForm()
{

    const [selectedMethodIndex, setSelectedMethodIndex] = useState(0);
    const [accountNumber, setAccountNumber] = useState("");
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

