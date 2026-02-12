import {maDepositValidation} from "./maDepositValidation.js";

export function maDepositModel(maData) {
    const errorMsg = maDepositValidation(maData);
    if (errorMsg.length > 0){
        throw new Error(errorMsg.join(', '));
    }

    return {
        clientID: maData.clientID,
        mAccountID: maData.mAccountID,
        amount: maData.amount
    }
}