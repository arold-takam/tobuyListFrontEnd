
const CLIENT_STORAGE_KEY = 'registered_clients';

function loadClients() {
    const clients = localStorage.getItem(CLIENT_STORAGE_KEY);

    return clients ? JSON.parse(clients) : [];
}

function saveClients(clients) {
    localStorage.setItem(CLIENT_STORAGE_KEY, JSON.stringify(clients));
}

export async function register(registerData) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            const clientList = loadClients();

            registerData.id = clientList.length + 1;
            clientList.push(registerData);

            saveClients(clientList);

            resolve(registerData);
        }, 300);
    });
}