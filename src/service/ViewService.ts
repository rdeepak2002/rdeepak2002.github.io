import axios from "axios";

const createView = async (): Promise<[response: any, error: any]> => {
    const ip = "ip";
    const browserId = "browserId";
    const deviceId = "deviceId";
    const isMobile = false;




    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE
    // TODO: get IP ON SPRING BOOT SIDE












    const postData = JSON.stringify({
        query: `mutation {
                createVisit(
                        ip: "${ip}",
                        browserId: "${browserId}",
                        deviceId: "${deviceId}"
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