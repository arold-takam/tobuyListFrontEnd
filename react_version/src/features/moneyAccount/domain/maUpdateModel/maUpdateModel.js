import {maUpdateValidation} from "./maUpdateValidation.js";

export function buildMaUpdate(maUpdate) {
    const errorMsg = maUpdateValidation(maUpdate);
    if (errorMsg.length > 0){
        throw new Error(errorMsg.join(', '));
    }

    return {
        clientId: maUpdate.clientId,
        mAccountID: maUpdate.mAccountID,
        oldPassword: maUpdate.oldPassword,
        newPassword: maUpdate.newPassword
    }
}