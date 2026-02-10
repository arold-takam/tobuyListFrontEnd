

import updateIcon from "../../../../../assets/images/Crayon.png";

import {Link} from "react-router-dom";


export default function InfoLine({user}) {

    return (
        <section className="infoLine">
            <div className="top">
                <h2>A Propos De Vous</h2>
                <Link to={"/update_profile"} state={{user}} className="updateBtn">
                    <p>MODIFIER</p>
                    <figure><img src={updateIcon} alt="pencil"/></figure>
                </Link>
            </div>
            <div className="line">
                <ul>
                    <li>
                        <p>Name</p>
                        <b>{user.name}</b>
                    </li>
                    <li>
                        <p>Role</p>
                        <b>{user.roleName}</b>
                    </li>
                </ul>
            </div>
        </section>
    );
}