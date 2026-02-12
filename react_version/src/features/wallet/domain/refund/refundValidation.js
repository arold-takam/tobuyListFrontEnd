export function refundValidation(refundData){
    const errors = [];

    if (refundData.creditID === 0){
        errors.push("Credit ID is required");
    }

    if (refundData.clientId === 0){
        errors.push("Client ID is required");
    }

    if (refundData.amount <= 0){
        errors.push('Amount must be greater than 0');
    }

    if (refundData.description && refundData.description.length > 100){
        errors.push('Description must be lower than 100 characters');
    }

    return errors;
}