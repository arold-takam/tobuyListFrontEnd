
const LIST_PROFILE_KEY = 'registered_clients';

//-----------------------------------------------------------------------------------------------
function loadProfiles() {
    const profileStored = localStorage.getItem(LIST_PROFILE_KEY);

    return profileStored ? JSON.parse(profileStored) : [];
}

function saveProfiles(listProfiles) {
    localStorage.setItem(LIST_PROFILE_KEY, JSON.stringify(listProfiles));
}
//-----------------------------------------------------------------------------------------------
export function UpdateProfileService(profileData, user, isAuthenticated, setAuthenticatedUser) {
    return new Promise((resolve, reject) => {
        if (!isAuthenticated) {
            return reject(new Error("You are not logged in."));
        }

        setTimeout(()=>{
            if (!profileData) {
                reject(new Error("Incorrect profile data."));
            }

            const listProfiles = loadProfiles();

            const index = listProfiles.findIndex(profile => profile.id === user.id);
            if (index === -1){
                return reject(new Error("Something went wrong, with your data."));
            }

            const newData = {
                ...user,
                id:user.id,
                name: profileData.name,
                username: profileData.username,
                mail: profileData.mail,
                password: profileData.password,
                roleName: user.roleName
            }

            listProfiles[index] = newData;
            setAuthenticatedUser(newData);

            saveProfiles(listProfiles);

            resolve(newData);

        }, 300);
    });
}