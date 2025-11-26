
const CLIENT_STORAGE_KEY = 'registered_clients';

function loadUsers() {
    const users = localStorage.getItem(CLIENT_STORAGE_KEY);

    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem(CLIENT_STORAGE_KEY, JSON.stringify(users));
}

// SIMULATION ADMIN REGISTER-----------------------------
    const admin = {
        id : 0,
        name : "toto",
        username : "toto@",
        mail : "toto@gmail.com",
        password : "1234",
        roleName : "ADMIN"
    }

    const userList = loadUsers();
    const adm = userList.find(user => user.username === "toto@");
    if (!adm) {
        register(admin);
    }

// ------------------------------

export async function register(registerData) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            const userList = loadUsers();

            registerData.id = userList.length + 1;
            userList.push(registerData);

            saveUsers(userList);

            resolve(registerData);
        }, 300);
    });
}