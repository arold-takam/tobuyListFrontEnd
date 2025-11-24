import Input from "../../general/input/Input.jsx";
import UseLogin from "../../../../application/UseLogin.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {
    const {loading, error, loginInfo, login, successMsg} = UseLogin();
    const [formData, setFormData] = useState({id:"user1", username:"", password:""});

    const navigate = useNavigate();
    useEffect(() => {
        if (successMsg) {
            navigate("/success", {
                state: successMsg,
            });
        }
    }, [successMsg, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(formData);
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form className="registerForm" onSubmit={handleSubmit}>
            {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>}
            <Input typeInput={"text"} nameInput={"username"} value={formData.username} onChange = {handleChange} />
            <Input typeInput={"password"} nameInput={"password"} value={formData.password} onChange = {handleChange} />
            <button type="submit" className="send" disabled={loading}>
                {loading? "CONNEXION..." : "SE CONNECTER"}
            </button>
        </form>
    );
}