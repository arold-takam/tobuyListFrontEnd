import account from '../../../../../../assets/images/account.png';
import arrow from '../../../../../../assets/images/arrowDown.png';
import OM from '../../../../../../assets/images/orangeOM.webp';
import MOMO from '../../../../../../assets/images/mtnMomo.webp';
import paypal from '../../../../../../assets/images/paypal.webp';
import './InputNumber.css'

const paymentMethods = [
    { name: "Compte Bancaire", img: account },
    { name: "Orange Money", img: OM },
    { name: "Mobile Money", img: MOMO },
    { name: "PayPal", img: paypal },
];

export default function InputNumber({selectedMethodIndex = 0,
                                        onMethodChange,
                                        accountNumber = "",
                                        onAccountNumberChange}) {


    const selected = paymentMethods[selectedMethodIndex];

    function handleNext(){
        const nextIndex = (selectedMethodIndex + 1) % paymentMethods.length;
        onMethodChange(nextIndex);
    }
    return (
            <div className="pay">
                <div className="select">
                    <div className="option">
                        <img
                            src={selected.img || ""}
                            alt={`Payer avec ${selected.name}`}
                            className="account"/>
                        <img
                            src={arrow || ""}
                            alt="Changer le moyen de paiement"
                            className="arrow"
                            onClick={handleNext}/>
                    </div>
                </div>
                <label htmlFor="number">Entrer Le Numero De Compte {selected.name === "Compte Bancaire" ? "Bancaire" : selected.name}</label>
                <input
                    type="text"
                    name="number"
                    id="number"
                    value={accountNumber}
                    onChange={(e) => onAccountNumberChange(e.target.value)}
                    required/>
            </div>
    )
}