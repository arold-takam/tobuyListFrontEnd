import {coRegisterValidation} from "./coRegisterValidation.js";

export function coRegisterModel(offerData){
    const errorMsg = coRegisterValidation(offerData);
    if (errorMsg.length > 0){
        throw new Error(errorMsg.join(', '));
    }

    return {
        titleCreditOffer: offerData.titleCreditOffer,
        limitationCreditAmount: offerData.limitationCreditAmount,
        creditDelay: offerData.creditDelay,
        taxAfterDelay: offerData.taxAfterDelay
    }
}