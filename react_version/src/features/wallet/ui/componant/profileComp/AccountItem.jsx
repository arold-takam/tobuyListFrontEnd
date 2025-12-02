import mtnIcon from '../../../../../assets/images/mtnMomo.webp';
import orangeIcon from '../../../../../assets/images/orangeOM.webp';
import paypalIcon from '../../../../../assets/images/paypal.webp';
import deleteIcon from "../../../../../assets/images/delete.png";

import {Link} from "react-router-dom";

export default function AccountItem({account}) {
    const iconMap = {
        'MTN_Mobile_Money' : mtnIcon,
        'Orange_Money' : orangeIcon,
        'PayPal' : paypalIcon
    }

    return (
        <li>
            <Link to={"/moneyAccount"} state={{account}}>
                <img src= {iconMap[account.name]} alt="mtn logo"/>
                <p>{account.phone}</p>
                <figure><img src={deleteIcon} alt="waste icon"/></figure>
            </Link>
        </li>
    );
}