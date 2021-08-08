import {detect} from 'detect-browser';

const browserId = () => {
    const browser: any = detect();
    return `${browser.name}${browser.version}${browser.os}`;
}

export {browserId};