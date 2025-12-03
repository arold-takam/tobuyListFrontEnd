import * as apiRegistration from '../infrastructure/MARegisterService.js';
import {useState} from "react";
import {useAuth} from "../../../contextGlobal/authContext/useAuth.js";
import {buildMoneyAccount} from "../domain/maRegisterModel/maModel.js";

export default function UseMARegistration(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

//     ---------------------------------------------------------------
    const {user} = useAuth();

    const register = async (maData) => {
        setLoading(true);
        setError(null);
        setSuccessMsg(null);

        try {
            let model = buildMoneyAccount(maData);
            model.clientId = user.id;

            const res = await apiRegistration.register(model);

            setSuccessMsg({
                message: "MA create successfully !",
                mAccount: res
            });

            console.log("Money account creation success");
        }catch (err) {
            setError(err.message);
            console.log("Registration failed." + err.message);
        } finally {
            setLoading(false);
        }
    }

    return{
        loading,
        error,
        register,
        successMsg
    };
}