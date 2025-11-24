import Input from "../../general/input/Input.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function RegisterForm() {
    const [smsAuth, _] = useState("INSCRIPTION EFFECTUEE AVEC SUCCES !");

    return (
        <form className="registerForm">
            <Input typeInput={"text"} nameInput={"fullName"} />
            <Input typeInput={"text"} nameInput={"userName"} />
            <Input typeInput={"email"} nameInput={"mail"} />
            <Input typeInput={"password"} nameInput={"pass"} />
            <button type="submit" className="send">S'INSCRIRE</button>
            <Link to="/success" state={smsAuth} style={{ color: "white", fontSize: "larger" }}>SUCCESS</Link>
        </form>
    );
}