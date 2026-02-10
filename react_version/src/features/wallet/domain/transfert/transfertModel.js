import {transfertValidation} from "./transfertValidation.js";

export function transfertModel(transfertData){
    const errorMsg = transfertValidation(transfertData);
    if (errorMsg.length > 0){
        throw new Error(errorMsg.join(', '));
    }

    return {
        amount: transfertData.amount,
        description: transfertData.description,
        phoneMAccount: transfertData.phoneMAccount,
        password: transfertData.password
    }
}