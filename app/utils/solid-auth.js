import auth from 'solid-auth-client';

async function login(idp) {
    const session = await auth.currentSession();
    if (!session)
        await auth.login(idp);
    else
        alert(`Logged in as ${session.webId}`);
        return session.webId;
}

async function popupLogin() {
    let session = await solid.auth.currentSession();
    let popupUri = 'https://solid.community/common/popup.html';
    if (!session)
      session = await solid.auth.popupLogin({ popupUri });

    alert(`Logged in as ${session.webId}`);
    return session.webId;
}