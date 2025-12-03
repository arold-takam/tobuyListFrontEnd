
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
            let isUpdate = false;

            const updatedArray = maArray.map(account => {
                if (account.id !== maData.mAccountID){
                    return account;
                }

                if (account.password !== maData.oldPassword){
                    throw new Error("Password is incorrect.");
                }

                isUpdate = true;

                return {
                    ...account,
                    password: maData.newPassword
                };
            });

            if (!isUpdate) {
                return reject(new Error('Update failed;'));
            }

            saveMoneyAccount(updatedArray);

            resolve({
                success: true,
                mAccountID: maData.mAccountID,
            });
        }, 300);
    });
}