import {refundValidation} from "./refundValidation.js";

export function refundModel(refundData) {
    const errorMsg = refundValidation(refundData);
    if (errorMsg.length > 0) {
        throw new Error(errorMsg.join(', '));
    }

    return {
        creditID: refundData.creditID,
        clientId: refundData.clientId,
        description: refundData.description,
        amount: refundData.amount
    }
}