
export function buildMaUpdate(maUpdate) {
    return {
        clientId: maUpdate.clientId,
        mAccountID: maUpdate.mAccountID,
        oldPassword: maUpdate.oldPassword,
        newPassword: maUpdate.newPassword
    }
}