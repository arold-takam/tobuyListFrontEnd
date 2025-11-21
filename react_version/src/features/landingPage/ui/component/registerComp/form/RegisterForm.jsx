import Input from "../../general/input/Input.jsx";

export default function RegisterForm() {
    return (
        <form className="registerForm">
            <Input typeInput={"text"} nameInput={"fullName"} />
            <Input typeInput={"text"} nameInput={"userName"} />
            <Input typeInput={"email"} nameInput={"mail"} />
            <Input typeInput={"password"} nameInput={"pass"} />
            <button type="submit" className="send">S'INSCRIRE</button>
            {/*<a href="#" style="color: white; font-size: larger;">SUCCESS</a>*/}
        </form>
    );
}