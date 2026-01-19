
const MA_STORE_KEY = 'moneyAccounts';

//--------------------------------------------------------------
function loadMoneyAccount() {
    const maStored = localStorage.getItem((MA_STORE_KEY));

    return maStored ? JSON.parse(maStored) : [];
}

function saveMoneyAccount(moneyAccounts) {
    localStorage.setItem(MA_STORE_KEY, JSON.stringify(moneyAccounts));
}

//--------------------------------------------------------------
export function update(maData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const maArray = loadMoneyAccount();

            // 1. Trouver le compte spécifique avant de mapper
            const accountToUpdate = maArray.find(acc => acc.id === maData.id);

            if (!accountToUpdate) {
                return reject(new Error('Compte non trouvé.'));
            }

            // 2. Vérification du mot de passe
            if (accountToUpdate.password !== maData.oldPassword) {
                return reject(new Error("Password is incorrect."));
            }

            if (maData.newPassword.length < 4){
                return reject(new Error("Password must be at least 4 characters."));
            }

            // 3. Mise à jour de la liste
            const updatedAccount = { ...accountToUpdate, password: maData.newPassword };
            const updatedArray = maArray.map(acc =>
                acc.id === maData.id ? updatedAccount : acc
            );

            saveMoneyAccount(updatedArray);

            // 4. On renvoie l'objet complet comme le ferait ton backend
            resolve(updatedAccount);
        }, 300);
    });
}