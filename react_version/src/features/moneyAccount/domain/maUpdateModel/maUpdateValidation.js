export function maUpdateValidation(maData){
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

    return errors;
}