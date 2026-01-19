export default function maValidation(maData) {
    const errors = [];

    if (!maData) {
        errors.push('Missing required fields');
        return errors;
    }

    if (!maData.name || !maData.phone || !maData.password) {
        errors.push('Name, phone, and password are required.');
    }

    if (maData.phone && maData.phone.length !== 9){
        errors.push('Right phone number is required(9 caracteres at least).');
    }

    return errors;
}