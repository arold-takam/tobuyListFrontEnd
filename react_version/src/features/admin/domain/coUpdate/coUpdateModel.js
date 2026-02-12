import {coUpdateValidation} from "./coUpdateValidation.js";

export function coUpdateModel(offerData){
    const errorMsg = coUpdateValidation(offerData);
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