import * as apiDeposit from '../infrastructure/MADepositService.js';
import {useState} from "react";

export default function (){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

//     -------------------------------------------------------------------------------------
    const deposit = async (depData) => {
        setLoading(true);
        setError(null);

        try {
            const res = await apiDeposit.deposit(depData);

            console.log("Deposit done successfully !->", res);

            return res;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        deposit
    }
}