import './FormAUpdMA.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import UseMAUpdate from "../../../application/UseMAUpdate.js";

export default function FormUpdMA() {
    const navigate = useNavigate();

    const {user} = useAuth();

    const location = useLocation();
    const {account} = location.state || {};

    const {loading,  error, update} = UseMAUpdate();
    const [formData, setFormData] = useState({
        id: account.id,
        oldPassword: account?.password || "",
        newPassword: "",
        clientId: user.id
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await update(formData);

            navigate("/moneyAccount", {
                state: {account: {...account, password: formData.newPassword}}
            });
        }catch (error) {
            console.log("Error while saving money account: "+ error.message);
        }
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div className={`updMa`} >
            <h1>Update your money account</h1>
            <form className="addForm" onSubmit={handleSubmit}>
                {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>}
                <div className="putZone">
                    <label htmlFor="oldPassword">Your old password</label>
                    <input type={"password"} name="oldPassword" value={formData.oldPassword} id="oldPassword" className="oldPassword" onChange={handleChange} readOnly/>
                </div>
                <div className="putZone">
                    <label htmlFor="newPassword">Enter the new password</label>
                    <input type={"password"} name="newPassword" value={formData.newPassword} id="newPassword" className="newPassword" onChange={handleChange} required/>
                </div>
                <div className="cta">
                    <Link to={'/moneyAccount'} state={{account: account}} type={'button'} className="back">BACK</Link>
                    <button type={'submit'} className="updateBtn" disabled={loading}>
                        {loading? "UPDATING..." : "UPDATE"}
                    </button>
                </div>
            </form>
        </div>
    )
}