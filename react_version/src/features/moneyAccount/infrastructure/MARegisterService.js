
const MA_STORE_KEY = 'moneyAccounts';

// -----------------------------------------------------
function loadMoneyAccount() {
    const maStored = localStorage.getItem(MA_STORE_KEY);

    return maStored ? JSON.parse(maStored) : [];
}

function saveMoneyAccount(moneyAccounts) {
    localStorage.setItem(MA_STORE_KEY, JSON.stringify(moneyAccounts));
}

//---------------------------------------------------------------
export function register(maData){
    return new Promise((resolve) => {
        setTimeout(() => {
            const maArray = loadMoneyAccount();

            maData.id = maArray.length + 1;
            maData.amount = 0.0;
            maArray.push(maData);

            saveMoneyAccount(maArray);

            resolve({
                id: maData.id,
                name: maData.name,
                phone: maData.phone,
                amount: maData.amount,
                clientId: maData.clientId
            });
        }, 300);
    });
}