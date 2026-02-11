export function depositValidation(depositData) {
    const errors = [];

    if (depositData.amount <= 0){
        errors.push('Amount must be greater than 0');
    }

    if (depositData.description && depositData.description.length > 100){
        errors.push('Description must be lower than 100 characters');
    }

    if (!depositData.phoneMAccount || depositData.phoneMAccount.length < 9){
        errors.push('Number account must be greater than 9 characters');
    }

    if (!depositData.MoneyAccountPassword  || depositData.MoneyAccountPassword.length < 4){
        errors.push('MoneyAccountPassword must be greater than 4 characters');
    }

    return errors;
}