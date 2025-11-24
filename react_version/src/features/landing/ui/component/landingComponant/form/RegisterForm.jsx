import Input from "../../general/input/Input.jsx";
import UseRegistration from "../../../../application/UseRegistration.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function RegisterForm() {
    const {loading, error, register, successMsg} = UseRegistration();
    const [formData, setFormData] = useState({
        id: 0,
        name: "",
        username: "",
        mail: "",
        password: ""
    })

    const navigate = useNavigate();
    useEffect(() => {
        if (successMsg) {
            navigate(
                "/success",
                {state: successMsg}
            );
        }
    }, [successMsg, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await register(formData);
    };
    const handleChange = (e) => {
        setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
    };

    return (
        <form className="registerForm" onSubmit={handleSubmit}>
            {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p> }
            <Input typeInput={"text"} nameInput={"name"} value={formData.name} onChange={handleChange}/>
            <Input typeInput={"text"} nameInput={"username"} value={formData.username} onChange={handleChange}/>
            <Input typeInput={"email"} nameInput={"mail"} value={formData.mail} onChange={handleChange}/>
            <Input typeInput={"password"} nameInput={"password"} value={formData.password} onChange={handleChange}/>
            <button type="submit" className="send" disabled={loading}>
                {loading? "INSCRIPTION..." : "S'INSCRIRE"}
            </button>
        </form>
    );
}