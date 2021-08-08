export function saveToStorage(key: string, value: string) {
    localStorage.setItem(key, value);
}

export function readFromStorage(key: string) {
    try {
        const item = localStorage.getItem(key);

        if (item) {
            return JSON.parse(item);
        } else {
            return undefined;
        }
    } catch (err) {
        return localStorage.getItem(key);
    }
}

export const k_device = "device";