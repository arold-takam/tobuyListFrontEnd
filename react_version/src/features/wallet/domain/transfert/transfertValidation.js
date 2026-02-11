export function transfertValidation(transfertData){
    const errors = [];

    if (transfertData.amount <= 0){
        errors.push('Amount must be greater than 0');
    }

    if (transfertData.description && transfertData.description.length > 100){
        errors.push('Description must be lower than 100 characters');
    }

    if (transfertData.phoneMAccount && transfertData.phoneMAccount.length < 9){
        errors.push('Number account must be greater than 9 characters');
    }

    if (transfertData.password  && transfertData.password.length < 4){
        errors.push('MoneyAccountPassword must be greater than 4 characters');
    }

    return errors;
}