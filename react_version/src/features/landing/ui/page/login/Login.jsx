import HeaderLanding from "../../component/general/headerLanding/HeaderLanding.jsx";
import './Login.css';
import {useState} from "react";
import LoginForm from "../../component/landingComponant/form/LoginForm.jsx";
import {Link} from "react-router-dom";

export default function Login() {
    const [landHederType, _] = useState("signUp");

    return (
        <div className="register">
            <HeaderLanding typeHeader={landHederType}/>
            <div className="main">
                <h1>ToBuyList</h1>
                <span className="description">Connectez-vous pour une meilleure gestion financière.</span>
                <LoginForm />
                <section className="meetUs">
                    <div className="callZone">
                        <h4>OU</h4>
                        <Link to="/register"  className="login">inscription</Link>
                    </div>
                </section>
                <footer>
                    <p>&copy; Copyright 2025, TobuyList; Tout droits reservé.</p>
                </footer>
            </div>
        </div>
    );
}