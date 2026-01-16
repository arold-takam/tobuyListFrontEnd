import './MaDeposit.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import UseMADeposit from "../../../application/UseMADeposit.js";

export default function MaDeposit(){
    const {loading, error, deposit} = UseMADeposit();

    const navigate = useNavigate();
    const location = useLocation();
    const account = location.state?.account || {};
    // console.log(account);

    const [amount, setAmount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const depData = {
                clientId: account.clientId,
                accountId: account.id,
                amount: Number(amount)
            }

            setTimeout(()=>{
                navigate("/moneyAccount", {state: {account: account}});
            }, 300);

            const res = await deposit(depData);
            console.log(res);
        } catch (err) {
            console.log(err);
        }

        setAmount("");
    }
    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    return (
        <div className={"maDeposit"}>
            <h1>Faite votre depot</h1>
            <p>En toute securite et sans vous deplacer</p>
            <form onSubmit={handleSubmit} className="dep">
                {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>}
                <div className="put">
                    <label htmlFor="amount">Entrer le montant a deposer</label>
                    <input type={"number"} name="amount" id="amount" min={100} className="amount" value={amount} onChange={handleChange} required={true}/>
                </div>
                <div className="cta">
                    <Link to={'/moneyAccount'} state={{account: account}} className="back">RETOURNER</Link>
                    {loading?
                        <button type="submit" className="makeIt" disabled={true}>EN COURS...</button>
                        :<button type="submit" className="makeIt">DEPOSER</button>
                    }
                </div>
            </form>
        </div>
    )
}