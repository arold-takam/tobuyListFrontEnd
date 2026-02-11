import {depositValidation} from "./depositValidation.js";

export function depositModel(depositData) {
    const errorMsg = depositValidation(depositData);
    if (errorMsg.length > 0) {
        throw new Error(errorMsg.join(', '));
    }

    return {
        amount: depositData.amount,
        description: depositData.description,
        phoneMaAccount: depositData.phoneMaAccount,
        MoneyAccountPassword: depositData.MoneyAccountPassword
    }
}