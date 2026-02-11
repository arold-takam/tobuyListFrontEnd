export function updClientValidation(updateData) {
    const errors = [];

    if (!updateData.username || !updateData.name || !updateData.password) {
        errors.push('Username or name or password is not given.');
    }

    if (updateData.password.length < 4) {
        errors.push('Password must be at least 4 characters.');
    }

    return errors;
}