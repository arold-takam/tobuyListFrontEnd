import account from '../../../../../../assets/images/account.png';
import arrow from '../../../../../../assets/images/arrowDown.png';
import OM from '../../../../../../assets/images/orangeOM.webp';
import MOMO from '../../../../../../assets/images/account.png';
import paypal from '../../../../../../assets/images/account.png';
import './InputNumber.css'


export default function InputNumber() {
    return (
            <div className="pay">
                <ul>
                    <li className="active">
                        <img src={account || ""} alt="account" className="account"/>
                        <img src={arrow || ""} alt="" className="arrow"/>
                    </li>
                    <li>
                        <img src={OM || ""} alt="OM" className="account"/>
                        <img src={arrow || ""} alt="" className="arrow"/>
                    </li>
                    <li>
                        <img src={MOMO || ""} alt="MOMO" className="account"/>
                        <img src={arrow || ""} alt="" className="arrow"/>
                    </li>
                    <li>
                        <img src={paypal || ""} alt="PayPal" className="account"/>
                        <img src={arrow || ""} alt="" className="arrow"/>
                    </li>
                </ul>
                <label htmlFor="number">Entrer Le Numero De Compte Payeur</label>
                <input type="text" name="number" id="number" required/>
            </div>
    )
}