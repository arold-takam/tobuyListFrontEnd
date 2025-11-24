import Input from "../../general/input/Input.jsx";

export default function LoginForm() {
    return (
        <form className="registerForm">
            <Input typeInput={"text"} nameInput={"userName"} />
            <Input typeInput={"password"} nameInput={"password"} />
            <button type="submit" className="send">SE CONNECTER</button>
            {/*<a href="#" style="color: white; font-size: larger;">SUCCESS</a>*/}
        </form>
    );
}