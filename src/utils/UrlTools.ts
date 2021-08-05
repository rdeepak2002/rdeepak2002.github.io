export const getBaseUrl = (): string => {
  const getUrl: any = window.location;
  const baseUrl: string = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
  return baseUrl;
}