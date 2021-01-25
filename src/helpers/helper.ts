const getDataLogin: Function = () => {
    return JSON.parse(window.localStorage.getItem('_ilu'));
}

const getToken: Function = () => {
    return getDataLogin()?.Token;
}

const getParamsId: Function = () => {
    const href = window.location.href;
    const params = href.split("/");
    return Number(params.pop());
}

const getPathServer: Function = (withImage: boolean) => {
    return withImage ? "http://ws.first.local/Images" : "http://ws.first.local";
}

export { getToken, getDataLogin, getParamsId, getPathServer };