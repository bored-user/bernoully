async function waitLoading(query) {
    let el = document.querySelector(query);

    while (el === null) {
        el = document.querySelector(query);
        await new Promise(res => setTimeout(res, 500));
    }

    return el;
}

(async function () {
    const userField = await waitLoading('input#usuario'),
        passwordField = await waitLoading('input#senha'),
        submitField = await waitLoading('button#btnLogin'),
        user = window.localStorage.getItem('BERNOULLY_USER'),
        password = window.localStorage.getItem('BERNOULLY_PASSWORD');

    if (user === null || password === null) {
        console.log('bernoully: no credentials registred');
        return;
    }

    userField.value = user;
    passwordField.value = password;

    submitField.click();
})()
