import * as apiLogin from "../infrastructure/LoginService.js";
import {useState} from "react";
import {buildLogin} from "../domain/login/loginModel.js";

export default function UseLogin() {
    const [loading, setLoading] = useState(true);
    const [error] = useState(null);

//     ------------------------------------------------------------------------------------
    const [loginInfo, setLoginInfo] = useState(null);

    const login = async (loginInfo) => {
        setLoading(true);

        try {
            let model = buildLogin(loginInfo);

            const res = await apiLogin.login(model);
            setLoginInfo(res);

            console.log("login success");
        } catch (err) {
            console.log("Login not found." + err.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        loginInfo,
        login
    };
}