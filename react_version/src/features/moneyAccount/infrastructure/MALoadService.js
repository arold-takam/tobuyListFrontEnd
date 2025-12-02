
const MA_STORE_KEY = 'moneyAccounts';

//MA DATA SIMULATION-------------------------------------------------------------------------------
const INITIAL_ACCOUNTS = [
    { id: 1, name: "MTN_Mobile_Money", phone: "650112233", password: "pwd", amount: 0.0, clientId: 1 },
    { id: 2, name: "PayPal", phone: "123456789", password: "pwd", amount: 0.0, clientId: 1 },
    { id: 3, name: "Orange_Money", phone: "690567622", password: "pwd", amount: 0.0, clientId: 1 }
];

// -----------------------------------------------------
function load() {
    const maStored = localStorage.getItem(MA_STORE_KEY);

    if (maStored) {
        return JSON.parse(maStored);
    }else {
        saveMoneyAccount(INITIAL_ACCOUNTS);

        return INITIAL_ACCOUNTS;
    }
}

function saveMoneyAccount(moneyAccounts) {
    localStorage.setItem(MA_STORE_KEY, JSON.stringify(moneyAccounts));
}

//--------------------------------------------------------------------------------------------------
export async function loadMoneyAccount(clientId) {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const allAccounts = load();

                const userAccounts = allAccounts.filter(account => account.clientId === clientId);

                resolve(userAccounts);
            }catch(error) {
                reject(new Error("Failed to load money accounts: "+ error));
            }
        }, 300);
    });
}