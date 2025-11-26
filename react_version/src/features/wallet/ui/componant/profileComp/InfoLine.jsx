import {useState} from "react";

import updateIcon from "../../../../../assets/images/Crayon.png";
import seeIcon from '../../../../../assets/images/eyeOpen.png';
import hideIcon from '../../../../../assets/images/eyeClosed.png';


export default function InfoLine({user}) {
    const [passVisible, setPassVisible] = useState(false);

    const handlePassVisibility = () => {
        setPassVisible(!passVisible);
    }

    return (
        <section className="infoLine">
            <div className="top">
                <h2>A Propos De Vous</h2>
                <a href="#" className="updateBtn">
                    <p>MODIFIER</p>
                    <figure><img src={updateIcon} alt="pencil"/></figure>
                </a>
            </div>
            <div className="line">
                <ul>
                    <li>
                        <p>Name</p>
                        <b>{user.name}</b>
                    </li>
                    <li className="pass">
                        <div className="left">
                            <p>Password</p>
                            <b>{passVisible? `${user.password}` : `* * * * * * * *`}</b>
                        </div>
                        <div className="right" onClick={handlePassVisibility}>
                            {passVisible? <img src={hideIcon} alt="see button"/>:<img src={seeIcon} alt="see button"/>}
                        </div>
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