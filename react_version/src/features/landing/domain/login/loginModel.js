import {validateLogin} from './loginValidation.js';

export function buildLogin(loginData) {
    const errorMsg = validateLogin(loginData);
    if (errorMsg.length > 0){
        throw new Error(errorMsg.join(', '));
    }

    return {
        id: loginData.id,
        username: loginData.username,
        password: loginData.password,
    };
}