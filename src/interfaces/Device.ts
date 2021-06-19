export default interface IDevice {
    id: string;
    ip: string,
    browserId: string,
    deviceId: string,
    isMobile: boolean,
    createdAt: string,
    lastVisited: string,
    previousDatesVisited: [
        string
    ]
}