
const MA_STORE_KEY = 'moneyAccounts';

const loadMAccounts = () => {
    const MaArray = localStorage.getItem(MA_STORE_KEY);

    return MaArray ? JSON.parse(MaArray) : [];
}

//MA DATA SIMULATION-------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------
export async function loadMoneyAccount(clientId) {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const MAstored = loadMAccounts();

                const userAccounts = MAstored.filter(account => account.clientId === clientId);

                resolve(userAccounts);
            }catch(error) {
                reject(new Error("Failed to load money accounts: "+ error));
            }
        }, 300);
    });
}