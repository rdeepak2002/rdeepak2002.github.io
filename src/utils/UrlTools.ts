export const getBaseUrl = (): string => {
    const getUrl: any = window.location;
    return getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
}

export const getSearchUrl = (): string => {
    return window.location.hash.substring(window.location.hash.indexOf("?") + 1);
}