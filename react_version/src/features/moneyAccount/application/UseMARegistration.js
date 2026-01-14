import * as apiRegistration from '../infrastructure/MARegisterService.js';
import {useState} from "react";
import {buildMoneyAccount} from "../domain/maRegisterModel/maModel.js";

export default function UseMARegistration(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

//     ---------------------------------------------------------------
    const register = async (maData) => {
        setLoading(true);
        setError(null);
        setSuccessMsg(null);

        try {
            let model = buildMoneyAccount(maData);

            const res = await apiRegistration.register(model);

            setSuccessMsg({
                message: "MA create successfully !",
                mAccount: res
            });

            console.log("Money account creation success");
        }catch (err) {
            setError(err.message);
            throw new Error("Registration failed." + err.message);
        } finally {
            setLoading(false);
        }
    }

    return{
        loading,
        setLoading,
        error,
        register,
        successMsg
    };
}