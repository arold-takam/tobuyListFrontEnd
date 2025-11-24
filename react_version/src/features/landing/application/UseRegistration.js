import {useState} from "react";
import * as apiRegister from "../infrastructure/RegisterService.js";
import {buildClient} from "../domain/register/registerModel.js";
import {useAuth} from "../../../contextGlobal/authContext/useAuth.js";

export default function UseRegistration() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

//     ---------------------------------------------------------------
    const [successMsg, setSuccessMsg] = useState(null);

    const {setAuthenticatedUser} = useAuth();

    const register = async (registerData) => {
        setLoading(true);
        setError(null);
        setSuccessMsg(null);

        try {
            let model = buildClient(registerData);

            const res = await apiRegister.register(model);

            setAuthenticatedUser(res);

            setSuccessMsg({
                message: "Registering succeed !",
                user: res
            });

            console.log("Register success");
        } catch (err) {
            setError(err.message);
            console.log("Registration failed." + err.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        register,
        successMsg,
    };
}