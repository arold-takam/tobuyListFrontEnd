import deleteIcon from "../../../../../assets/images/delete.png";

export default function AccountItem({imgIcon, number}) {
    return (
        <li>
            <a href="#">
                <img src={imgIcon} alt="mtn logo"/>
                <p>{number}</p>
                <figure><img src={deleteIcon} alt="waste icon"/></figure>
            </a>
        </li>
    );
}