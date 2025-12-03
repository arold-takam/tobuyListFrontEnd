import maValidation from "./maValidation.js";

export function buildMoneyAccount(maData) {
    const errorMsg = maValidation(maData);
    if (errorMsg.length > 0){
        throw new Error(errorMsg.join(', '));
    }

    return{
        id: maData.id,
        name: maData.name,
        phone: maData.phone,
        password: maData.password,
        amount: 0.0,
        clientId: maData.clientId
    }
}