import * as apiDelete from '../infrastructure/MADeleteService.js';
import {useState} from "react";

export default function UseMADelete(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    const deleteMAccount = async (dataDelete) => {
        setLoading(true);
        setError(null);
        setSuccessMsg(null);

        try {
            const res = await apiDelete.delMoneyAccount(dataDelete);

            setSuccessMsg({
                message:"MA deleted successfully !",
                mAccount: res
            });

            console.log("Successfully deleted successfully !");

            return res;
        }catch(err){
            setError(err.message);

            console.log("Error when deleting money account: "+err.message);

            throw err;
        }finally {
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        successMsg,
        deleteMAccount
    }
}