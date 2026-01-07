import './ProfileUpdate.css';

import {useLocation} from "react-router-dom";
import {useState} from "react";

export default function ProfileUpdate() {
    const location = useLocation();
    const {user} = location.state || {};

    const [formData, setFormData] = useState({
        name: user?.name || " ",
        username: user?.username || "",
        mail: user?.mail || "",
        password: user?.password
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <section className="profileUpd">
            <h1>Update your profile</h1>
            <form className="update">
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
                    <button type="button" className="back">RETOUR</button>
                    <button type="submit" className="validate">ENVOYER</button>
                </div>
            </form>
        </section>
    );
}