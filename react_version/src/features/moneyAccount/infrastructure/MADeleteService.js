const MA_STORE_KEY = 'moneyAccounts';

//-------------------------------------------------------------------
function loadMoneyAccount() {
    const maStored = localStorage.getItem(MA_STORE_KEY);

    return maStored ? JSON.parse(maStored) : [];
}

function saveMoneyAccounts(moneyAccounts) {
    localStorage.setItem(MA_STORE_KEY, JSON.stringify(moneyAccounts));
}

//-------------------------------------------------------------------

export function delMoneyAccount(dataDelete){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const maArray = loadMoneyAccount();

            const moneyAccount = maArray.find((m) => m.id === dataDelete.mAccountID);
            if (!moneyAccount) {
                return reject(new Error("Money account not found with id " + dataDelete.mAccountID));
            }

            const updArray = maArray.filter(m => m.id !== dataDelete.mAccountID);
            saveMoneyAccounts(updArray);

            resolve(true);
        }, 300);
    });
}