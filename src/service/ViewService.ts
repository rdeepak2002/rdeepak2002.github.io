import axios from "axios";

import {isMobile} from "react-device-detect";
import {browserId} from "utils/BrowserId";
import {k_device, readFromStorage} from "utils/Serialize";

const createView = async (): Promise<[response: any, error: any]> => {
    const device = readFromStorage(k_device);

    const postData = JSON.stringify({
        "Id": device ? device.Id : "",
        "BrowserId": browserId(),
        "IsMobile": isMobile ? 1 : 0
    });

    let response = undefined;
    let error = undefined;

    try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const endpoint = 'setVisit';
        const res = await axios.post(`${apiUrl}/${endpoint}`, postData);

        if (res.statusText === "OK") {
            response = res.data;
        } else {
            error = response;
        }
    } catch (err) {
        error = err;
    }

    return [response, error];
}

export {createView};