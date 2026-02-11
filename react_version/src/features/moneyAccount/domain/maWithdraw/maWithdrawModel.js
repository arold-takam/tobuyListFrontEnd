import {maWithdrawValidation} from "./maWithdrawValidation.js";

export function maWithdrawModel(maData){
    const errorMsg = maWithdrawValidation(maData);
    if (errorMsg.length > 0){
        throw new Error(errorMsg.join(', '));
    }

    return {
        clientId: maData.clientId,
        mAccountID: maData.mAccountID,
        newPassword: maData.newPassword
    }
}