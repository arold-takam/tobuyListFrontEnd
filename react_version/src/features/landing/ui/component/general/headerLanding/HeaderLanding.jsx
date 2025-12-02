import {Link} from "react-router-dom";
import './HeaderLanding.css';
import imgLogo from "../../../../../../assets/images/imgLogo.png";

export default function HeaderLanding({typeHeader}) {
    return (
        <header className={typeHeader}>
            <Link to="/" className="linkPage"><img src={imgLogo} alt="logo icon"/></Link>
            <div className="authCta">
                <Link to="/login" href="#" className="login">CONNECTION</Link>
                <Link to="/register" className="registerBtn">INSCRIPTION</Link>
            </div>
        </header>
    )
}