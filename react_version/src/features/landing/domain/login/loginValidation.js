export function validateLogin(loginData) {
    const errors = [];

    if (!loginData.username || !loginData.password) {
        errors.push('Username and password not given.');
    }

    if (loginData.password.length < 4) {
        errors.push('Password must be at least 4 characters.');
    }

    return errors;
}