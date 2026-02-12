import {registerValidation} from './registerValidation.js';

export function buildClient(registerData) {
    const errorMsg = registerValidation(registerData);
    if (errorMsg.length > 0){
        throw new Error(errorMsg.join(', '));
    }

    return {
        id: registerData.id,
        name: registerData.name,
        username: registerData.username,
        mail: registerData.mail,
        password: registerData.password,
        roleName: registerData.roleName,
        wallet: registerData.wallet
    };
}