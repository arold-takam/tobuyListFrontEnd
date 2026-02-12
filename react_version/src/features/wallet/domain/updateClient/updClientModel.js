import {updClientValidation} from "./updClientValidation.js";

export function buildUpdClient(updateData){
    const errorMsg = updClientValidation(updateData);
    if (errorMsg.length > 0) {
        throw new Error(errorMsg.join(', '));
    }

    return {
        id: updateData.id,
        name: updateData.username,
        username: updateData.username,
        mail: updateData.email,
        password: updateData.password,
        roleName: updateData.roleName,
        wallet: updateData.wallet
    }
}