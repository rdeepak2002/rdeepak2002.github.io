import axios from "axios";

import { isMobile } from "react-device-detect";
import { v4 as uuidv4 } from "uuid";

import { browserId } from "utils/BrowserId";

const createView = async (): Promise<[response: any, error: any]> => {
    const postData = JSON.stringify({
        query: `mutation {
                createVisit(
                        browserId: "${browserId()}",
                        deviceId: "${uuidv4()}"
                        isMobile: ${isMobile},
                    ) {
                        id
                        ip
                        browserId
                        deviceId
                        isMobile
                        createdAt
                        lastVisited
                        previousDatesVisited
                    }
                }`,
        variables: {}
    });

    let response = undefined;
    let error = undefined;

    try {
        const data = await axios.post('http://localhost:8080/api/graphql', postData);
        if (data.data.data) {
            response = data.data.data.createVisit;
        }
        error = data.data.errors;
    }
    catch (err) {
        error = err;
    }

    return [response, error];
}

export { createView };