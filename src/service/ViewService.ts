import axios from "axios";

import { isMobile } from "react-device-detect";
import { v4 as uuidv4 } from "uuid";

import { browserId } from "utils/BrowserId";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const createView = async (): Promise<[response: any, error: any]> => {
  const postData = JSON.stringify({
    "Id": "",
    "BrowserId": "browserId",
    "IsMobile": 0
  });

  let response = undefined;
  let error = undefined;

  try {
    const apiUrl = process.env.REACT_APP_API_URL;
    const endpoint = 'setVisit';
    const res = await axios.post(`${apiUrl}/${endpoint}`, postData);

    if (res.statusText === "OK") {
      response = res.data;
    }
    else {
      error = response;
    }
  }
  catch (err) {
    error = err;
  }

  return [response, error];
}

export { createView };