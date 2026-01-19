import * as apiMaUpdate from '../infrastructure/MAUpdateService.js';
import {useState} from "react";

export default function (){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

//     -----------------------------------------------------------------------------------
    const update = async (maData) => {
        setLoading(true);
        setError(null);

        try {
            const res = await apiMaUpdate.update(maData);
            console.log(res);

            console.log("Money account updated successfully !");
        }catch(err){
            setError(err.message);
            throw err;
        }finally{
            setLoading(false);
        }
    }

    return{
        loading,
        error,
        update
    }
}