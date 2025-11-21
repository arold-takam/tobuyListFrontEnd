import HeaderLanding from "../../component/general/headerLanding/HeaderLanding.jsx";
import './Register.css';
import {useState} from "react";
import RegisterForm from "../../component/registerComp/form/RegisterForm.jsx";

export default function Register() {
    const [landHederType, _] = useState("signIn");

    return (
        <div className="register">
            <HeaderLanding typeHeader={landHederType}/>
            <div className="main">
                <h1>ToBuyList</h1>
                <span className="description">Inscrivez-vous pour une meilleure gestion financière.</span>
                <section className="onboarding">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                    <div className="errorTracker">Aucune info détectée pour l'instant.</div>
                </section>
                <RegisterForm />
                <section className="meetUs">
                    <div className="callZone">
                        <h4>OU</h4>
                        <a href="#" className="login">connection</a>
                    </div>
                </section>
                <footer>
                    <p>&copy; Copyright 2025, TobuyList; Tout droits reservé.</p>
                </footer>
            </div>
        </div>
    );
}