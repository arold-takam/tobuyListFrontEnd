const MA_STORE_KEY = 'moneyAccounts';

//-------------------------------------------------------------------------------------
function loadMoneyAccounts() {
    const listAccounts = localStorage.getItem(MA_STORE_KEY);

    return listAccounts ? JSON.parse(listAccounts) : [];
}

function saveMoneyAccounts(moneyAccounts) {
    localStorage.setItem(MA_STORE_KEY, JSON.stringify(moneyAccounts));
}

//--------------------------------------------------------------------------------------
export function deposit(depData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const maArray = loadMoneyAccounts();

            // 1. On cherche par accountId (clé envoyée par le formulaire)
            const mAccount = maArray.find(acc => Number(acc.id) === Number(depData.accountId));

            if (!mAccount) {
                return reject(new Error('Compte introuvable pour ID: ' + depData.accountId));
            }

            // 2. Calcul propre
            const newAmount = Number(mAccount.amount) + Number(depData.amount);

            // 3. Mise à jour du tableau (On compare acc.id avec depData.accountId)
            const updatedArray = maArray.map(acc =>
                acc.id === depData.accountId
                    ? { ...acc, amount: newAmount }
                    : acc
            );

            saveMoneyAccounts(updatedArray);

            // 4. On renvoie l'objet mis à jour
            const updatedAccount = updatedArray.find(acc => acc.id === depData.accountId);
            resolve(updatedAccount);
        }, 300);
    });
}