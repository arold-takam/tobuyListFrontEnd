const MA_STORE_KEY = 'moneyAccounts';

//------------------------------------------------------------------------------------------
function loadMoneyAccounts() {
    const listAccounts = localStorage.getItem(MA_STORE_KEY);

    return listAccounts ? JSON.parse(listAccounts) : [];
}

function saveMoneyAccount(moneyAccounts) {
    localStorage.setItem(MA_STORE_KEY, JSON.stringify(moneyAccounts));
}

//------------------------------------------------------------------------------------------
export function withdraw(withdrawData, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (withdrawData.password !== password) {
                return reject(new Error("Passwords don't match"));
            }

            const maArray = loadMoneyAccounts();

            const mAccount = maArray.find(acc => Number(acc.id) === Number(withdrawData.accountId));
            if (!mAccount) {
                return reject(new Error('Compte introuvable pour ID: ' + withdrawData.accountId));
            }

            const newAmount = Number(mAccount.amount) - Number(withdrawData.amount);
            if (newAmount < 0){
                return reject(new Error('Solde insuffisant: ' + mAccount.amount));
            }

            const updArray = maArray.map(acc => acc.id === withdrawData.accountId
                ? {...acc, amount: newAmount}
                : acc
            );
            saveMoneyAccount(updArray);

            const updAccount = updArray.find(acc => acc.id === withdrawData.accountId);
            resolve(updAccount);
        }, 300);
    });
}