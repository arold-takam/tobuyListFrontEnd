export function coRegisterValidation(offerData){
    const errors = [];

    if (!offerData){
        errors.push("Credit offers data are missing");
        return errors;
    }

    if (!offerData.titleCreditOffer){
        errors.push("Credit offers title is missing");
    }

    if (offerData.limitationCreditAmount < 0){
        errors.push("Amount must be 0 at lest.");
    }

    if (offerData.creditDelay < 0){
        errors.push("Delay must be 1 at lest.");
    }

    if (offerData.taxAfterDelay < 0){
        errors.push("Taxe must be 1 at lest.");
    }

    return errors;
}