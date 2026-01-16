import * as apiWithdraw from '../infrastructure/MAWithdrawService.js';
import {useState} from "react";

export default function () {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

//     ----------------------------------------------------------------------------------------
    const withdraw = async (withdrawData, password) => {
        setLoading(true);
        setError(null);

        try {
            const res = await apiWithdraw.withdraw(withdrawData, password);

            console.log("Withdraw done successfully !->", res);

            return res;
        }catch(err) {
            setError(err.message);
            throw err;
        }finally {
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        withdraw
    }
}