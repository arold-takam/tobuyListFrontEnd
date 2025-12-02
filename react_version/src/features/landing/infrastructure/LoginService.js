
const CLIENT_STORAGE_KEY = 'registered_clients';

function loadClients() {
    const clients = localStorage.getItem(CLIENT_STORAGE_KEY);

    return clients ? JSON.parse(clients) : [];
}

export function login(loginData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const clientList = loadClients();

            const foundUser = clientList.find(
                user => user.username === loginData.username && user.password === loginData.password
            );
            if (foundUser) {
                resolve(foundUser);
            }else {
                reject(new Error("Invalid login credential!"));
            }
        }, 300);
    });
}