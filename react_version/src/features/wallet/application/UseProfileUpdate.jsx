import * as apiUpdProfile from  '../infrastructure/UpdateProfileService.js';
import {useState} from "react";
import {useAuth} from "../../../contextGlobal/authContext/useAuth.js";

export default function UseProfileUpdate(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

//     --------------------------------------------------------------------------------------------
    const {user, isAuthenticated, setAuthenticatedUser} = useAuth();

    const update = async (profileData) => {
        setLoading(true);
        setError(null);
        setSuccessMsg(null);

        try {
            const res = await apiUpdProfile.UpdateProfileService(profileData, user, isAuthenticated, setAuthenticatedUser);

            setSuccessMsg({
                message: "Account updated successfully !",
                mAccount: res
            });
        }catch (err){
            setError(err.message);
            console.error("Update failed: "+err.message);
        }finally {
            setLoading(false);
        }
    }

    return{
        loading,
        error,
        successMsg,
        update
    }
}