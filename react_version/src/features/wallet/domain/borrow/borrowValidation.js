export function borrowValidation(borrowData) {
    const errors = [];

    if (borrowData.clientSenderID === 0 || borrowData.clientSenderID === null){
        errors.push("This client does not exist.");
    }

    if (borrowData.creditOfferTitle){
        errors.push("This credit offer does not exist.");
    }

    if (borrowData.description && borrowData.description.length > 100){
        errors.push('Description must be lower than 100 characters');
    }

    if (borrowData.phoneMAccount && borrowData.phoneMAccount.length < 9){
        errors.push('Number account must be greater than 9 characters');
    }

    if (borrowData.password  && borrowData.password.length < 4){
        errors.push('MoneyAccountPassword must be greater than 4 characters');
    }

    return errors;
}