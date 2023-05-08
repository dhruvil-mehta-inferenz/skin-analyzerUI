import axios from 'axios';
import { baseURL } from '../Config';



async function sendImages(_base64) {
    const data = {
        user_uuid: "9ff2004d-544c-46e5-8032-2c9290b7012b",
        image: _base64,
        source: "WEB_PORTAL"
    }
    const headers = {
        'Content-Type': 'application/json',
    }
    await axios.post(`${baseURL}/api/v1/analysis/`, data, {
        headers: headers
    }).then((_response) => {
        return _response;
    }).catch((error) => {
        console.log(error, "error")
    })
}

export {
    sendImages
}