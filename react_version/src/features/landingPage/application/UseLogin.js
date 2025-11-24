import * as apiLogin from "../infrastructure/LoginService.js";
import {useState} from "react";
import {buildLogin} from "../domain/login/loginModel.js";

export default function UseLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

//     ------------------------------------------------------------------------------------
    const [loginInfo, setLoginInfo] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    const login = async (loginInfo) => {
        setLoading(true);
        setError(null);
        setSuccessMsg(null);

        try {
            let model = buildLogin(loginInfo);

            const res = await apiLogin.login(model);
            setLoginInfo(res);

            setSuccessMsg({
                message: "Login succeed !",
                user: res
            });

            console.log("login success");
        } catch (err) {
            setError(err.message);
            console.log("Login not found." + err.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        loginInfo,
        login,
        successMsg
    };
}