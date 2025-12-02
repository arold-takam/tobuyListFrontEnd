export function registerValidation(registerData) {
    const errors = [];

    if (!registerData.username || !registerData.password) {
        errors.push('Username and password not given.');
    }

    if (registerData.password.length < 4) {
        errors.push('Password must be at least 4 characters.');
    }

    return errors;
}