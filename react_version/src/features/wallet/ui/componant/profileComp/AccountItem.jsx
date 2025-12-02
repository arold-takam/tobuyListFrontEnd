import deleteIcon from "../../../../../assets/images/delete.png";
import {Link} from "react-router-dom";

export default function AccountItem({imgIcon, number}) {
    return (
        <li>
            <Link to={"/moneyAccount"} state={{imgIcon, number}}>
                <img src={imgIcon} alt="mtn logo"/>
                <p>{number}</p>
                <figure><img src={deleteIcon} alt="waste icon"/></figure>
            </Link>
        </li>
    );
}