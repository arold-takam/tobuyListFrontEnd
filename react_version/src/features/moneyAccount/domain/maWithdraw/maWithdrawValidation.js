
export function maWithdrawValidation(maData){
    const errors = [];

    if (!maData) {
        errors.push('Missing required fields');
        return errors;
    }

    if (!maData.password) {
        errors.push('Password is required.');
    }

    if (maData.password.length < 4){
        errors.push('Password must be at least 4 characters');
    }

    if (maData.amount < 0){
        errors.push('Enter a valid amount');
    }

    return errors;
}