export default interface IDevice {
    Id: string;
    Ip: string,
    BrowserId: string,
    UserAgent: string,
    IsMobile: number,
    CreatedAt: string,
    PreviousDatesVisited: Array<number>
}