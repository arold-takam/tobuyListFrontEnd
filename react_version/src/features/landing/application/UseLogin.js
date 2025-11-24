import * as apiLogin from "../infrastructure/LoginService.js";
import {useState} from "react";
import {buildLogin} from "../domain/login/loginModel.js";
import {useAuth} from "../../../contextGlobal/authContext/useAuth.js";

export default function UseLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

//     ----------------------------------------------------------------------------------
    const [successMsg, setSuccessMsg] = useState(null);

    const {setAuthenticatedUser} = useAuth();

    const login = async (loginInfo) => {
        setLoading(true);
        setError(null);
        setSuccessMsg(null);

        try {
            let model = buildLogin(loginInfo);

            const res = await apiLogin.login(model);

            setAuthenticatedUser(res);

            setSuccessMsg({
                message: "Login succeed !",
                user: res
            });

            console.log("Login success");
        } catch (err) {
            setError(err.message);
            console.log("LOGIN ERROR: " + err.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        login,
        successMsg
    };
}