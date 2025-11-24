import HeaderLanding from "../../component/general/headerLanding/HeaderLanding.jsx";
import './Register.css';
import {useState} from "react";
import RegisterForm from "../../component/landingComponant/form/RegisterForm.jsx";
import {Link} from "react-router-dom";

export default function Register() {
    const [landHederType, _] = useState("signIn");

    return (
        <div className="register">
            <HeaderLanding typeHeader={landHederType}/>
            <div className="main">
                <h1>ToBuyList</h1>
                <span className="description">Inscrivez-vous pour une meilleure gestion financière.</span>
                <RegisterForm />
                <section className="meetUs">
                    <div className="callZone">
                        <h4>OU</h4>
                        <Link to="/login"  className="login">connection</Link>
                    </div>
                </section>
                <footer>
                    <p>&copy; Copyright 2025, TobuyList; Tout droits reservé.</p>
                </footer>
            </div>
        </div>
    );
}