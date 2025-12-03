import './FormAddMA.css';
import {Link, useNavigate} from "react-router-dom";
import UseMARegistration from "../../../application/UseMARegistration.js";
import {useState} from "react";

export default function FormAddMA() {
    const navigate = useNavigate();

    const {loading, error, register} = UseMARegistration();
    const [formData, setFormData] = useState({name: "", phone: "", password: "", });

    const AccountName = [
        "MTN_Mobile_Money",
        "Orange_Money",
        "PayPal"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await register(formData);

            navigate("/profile");
        }catch (error) {
            console.error("Error while saving money account: ", error);
        }
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div className={`addMa`} >
            <h1>Add new money account to pay easy here</h1>
            <form className="addForm" onSubmit={handleSubmit}>
                {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>}
                <div className="choice">
                    <label htmlFor="accountType">Account Type</label>
                    <select name="name" value={formData.name} id="accountType" onChange={handleChange} required>
                        <option value="" disabled>Select your account type</option>
                        {AccountName.map((accountName) => (
                            <option key={accountName} value={accountName}>{accountName}</option>
                        ))}
                    </select>
                </div>
                <div className="putZone">
                    <label htmlFor="tel">Enter the phone number</label>
                    <input type={'tel'} name="phone" value={formData.phone} id="tel" className="tel" onChange={handleChange} required/>
                </div>
                <div className="putZone">
                    <label htmlFor="pass">Enter the password</label>
                    <input type="password" name="password" value={formData.password} id="pass" className="pass" onChange={handleChange} required/>
                </div>
                <div className="cta">
                    <Link to={"/profile"} type={'button'} className="back">BACK</Link>
                    <button type={'submit'} className="create" disabled={loading}>
                        {loading? "CREATING..." : "CREATE"}
                    </button>
                </div>
            </form>
        </div>
    )
}