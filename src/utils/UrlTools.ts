export const getBaseUrl = (): string => {
  const getUrl: any = window.location;
  const baseUrl: string = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
  return baseUrl;
}

export const getSearchUrl = (): string => {
  return window.location.hash.substring(window.location.hash.indexOf("?") + 1);
}