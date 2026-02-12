import {borrowValidation} from "./borrowValidation.js";

export function borrowModel(borrowData) {
    const errorMsg = borrowValidation(borrowData);
    if (errorMsg.length > 0){
        throw new Error(errorMsg.join(', '));
    }

    return {
        clientSenderID: borrowData.clientSenderID,
        creditOfferTitle: borrowData.creditOfferTitle,
        description: borrowData.description,
        phoneMAccount: borrowData.phoneMAccount,
        password: borrowData.password
    }
}