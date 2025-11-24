
let endPointLogin = {
    id: 'default',
    username: ' ',
    password: ' ',
};

export async function login(loginData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            endPointLogin.id = loginData.id;
            endPointLogin.username = loginData.username;
            endPointLogin.password = loginData.password;

            console.log("API simulation passed successfully!");
            resolve(endPointLogin);
        }, 500);
    });
}

export function getLoginInfo() {
    return Promise.resolve(endPointLogin);
}