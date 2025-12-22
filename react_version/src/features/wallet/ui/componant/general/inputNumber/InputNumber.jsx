import account from '../../../../../../assets/images/account.png';
import arrow from '../../../../../../assets/images/arrowDown.png';
import OM from '../../../../../../assets/images/orangeOM.webp';
import MOMO from '../../../../../../assets/images/mtnMomo.webp';
import paypal from '../../../../../../assets/images/paypal.webp';
import './InputNumber.css'
import {useState} from "react";

const paymentMethods = [
    { name: "Compte Bancaire", img: account },
    { name: "Orange Money", img: OM },
    { name: "Mobile Money", img: MOMO },
    { name: "PayPal", img: paypal },
];

export default function InputNumber() {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = paymentMethods[selectedIndex];

    function handleNext(){
        setSelectedIndex((prev) => (prev + 1) % paymentMethods.length);
    }
    return (
            <div className="pay">
                <div className="select">
                    <div className="option">
                        <img
                            src={selected.img}
                            alt={`Payer avec ${selected.name}`}
                            className="account"/>
                        <img
                            src={arrow || ""}
                            alt="Changer le moyen de paiement"
                            className="arrow"
                            onClick={handleNext}/>
                    </div>
                </div>
                <label htmlFor="number">Entrer Le Numero De Compte Payeur</label>
                <input type="text" name="number" id="number" required/>
            </div>
    )
}