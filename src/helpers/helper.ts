const getDataLogin: Function = () => {
    return JSON.parse(window.localStorage.getItem('_ilu'));
}

const getToken: Function = () => {
    return getDataLogin()?.Token;
}

export { getToken, getDataLogin };