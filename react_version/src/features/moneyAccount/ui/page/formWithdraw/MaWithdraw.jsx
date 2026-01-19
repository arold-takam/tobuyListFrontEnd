import './MaWithdraw.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import UseMAWithdraw from "../../../application/UseMAWithdraw.js";

export default function MaWithdraw(){
    const {loading, error, withdraw} = UseMAWithdraw();

    const navigate = useNavigate();
    const location = useLocation();
    const account = location.state?.account || {};
    // console.log(account);

    const [formState, setFormState] = useState({
        amount: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const withdrawData = {
                clientId: account.clientId,
                accountId: account.id,
                amount: Number(formState.amount),
                password: account.password
            }

            const res = await withdraw(withdrawData, formState.password);
            console.log("Retrait réussi :", res);

            setTimeout(()=>{
                navigate("/moneyAccount", {state: {account: account}});
            }, 300);
        } catch (err) {
            console.error("Erreur de retrait :", err.message);
        }

        setFormState({
            amount: "",
            password: ""
        });
    }
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className={"maWithdraw"}>
            <h1>Faite votre retrait</h1>
            <p>En toute securite et sans vous deplacer</p>
            <form onSubmit={handleSubmit} className="withdrawForm">
                {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>}
                <div className="put">
                    <label htmlFor="amount">Entrer le montant a retirer</label>
                    <input type={"number"} name="amount" id="amount" min={0} className="amount" value={formState.amount} onChange={handleChange} required={true}/>
                </div>
                <div className="put">
                    <label htmlFor="pass">Entrer code</label>
                    <input type={"password"} name={"password"} id="pass" className="pass" value={formState.password} onChange={handleChange} required={true}/>
                </div>
                <div className="cta">
                    <Link to={'/moneyAccount'} state={{account: account}} className="back">RETOURNER</Link>
                    {loading?
                        <button type="submit" className="makeIt" disabled={true}>EN COURS...</button>
                        :<button type="submit" className="makeIt">RETIRER</button>
                    }
                </div>
            </form>
        </div>
    )
}