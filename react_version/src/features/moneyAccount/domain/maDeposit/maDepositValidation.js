export function maDepositValidation(maData){
    const errors = [];

    if (!maData) {
        errors.push('Missing required fields');
        return errors;
    }

    if (maData.clientID === 0) {
        errors.push('Client id is required');
    }

    if (maData.mAccountID === 0) {
        errors.push('Money account id is required');
    }

    if (maData.amount < 100){
        errors.push("Amount must be greater than 100");
    }

    return errors;
}