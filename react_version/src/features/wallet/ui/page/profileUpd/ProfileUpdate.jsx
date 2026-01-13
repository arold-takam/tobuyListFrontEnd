import './ProfileUpdate.css';

import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import UseProfileUpdate from "../../../application/UseProfileUpdate.jsx";

export default function ProfileUpdate() {
    const {loading, error, successMsg, update} = UseProfileUpdate();

    const location = useLocation();
    const {user} = location.state || {};

    const [formData, setFormData] = useState({
        name: user?.name || "",
        username: user?.username || "",
        mail: user?.mail || "",
        password: user?.password || ""
    });

    const navigate = useNavigate();
    useEffect(()=>{
        if (successMsg) {
            navigate("/profile", {
                state: successMsg
            });
        }
    }, [successMsg, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        setFormData({
            name: "",
            username: "",
            mail: "",
            password: ""
        });

        await update(formData);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const backToProfil = () => {
        navigate("/profile");
    }

    return (
        <section className="profileUpd">
            <h1>Update your profile</h1>
            <form className="update" onSubmit={handleSubmit}>
                {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p> }
                <div className="put">
                    <label htmlFor="name">Enter your name</label>
                    <input type="text" name="name" value={formData.name} id="name" className="name" required onChange={handleChange}/>
                </div>
                <div className="put">
                    <label htmlFor="username">Enter your username</label>
                    <input type="text" name="username" value={formData.username} id="username" className="username" required onChange={handleChange}/>
                </div>
                <div className="put">
                    <label htmlFor="mail">Enter your mail</label>
                    <input type={"email"} name="mail" value={formData.mail} id="mail" className="mail" required onChange={handleChange}/>
                </div>
                <div className="put">
                    <label htmlFor="password">Enter your password</label>
                    <input type={"password"} name="password" value={formData.password} id="password" className="password" onChange={handleChange}/>
                </div>
                <div className="cta">
                    <button type="button" className="back" onClick={backToProfil}>RETOUR</button>
                    <button type="submit" className="validate">
                        {loading ? "ENVOI...": "ENVOYER"}
                    </button>
                </div>
            </form>
        </section>
    );
}