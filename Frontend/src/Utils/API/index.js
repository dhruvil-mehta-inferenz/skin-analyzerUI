import axios from 'axios';
import { baseURL } from '../Config';

async function ListSkinIssues() {
    let data = null;
    await axios.get(`${baseURL}/list_skinIssues`).then((_response) => {
        data = _response.data.data;
    });
    return data;
}
async function ListCategories() {
    let data = null;
    await axios.get(`${baseURL}/list_scoreCategories`).then((_response) => {
        data = _response.data.data;
    });
    return data;
}
async function SendImages(_base64, _issue) {
    let respData = null;
    const data = {
        uuid: "9ff2004d-544c-46e5-8032-2c9290b7012c",
        source: 'WEB',
        base64Image: _base64
    }
    const headers = {
        'Content-Type': 'application/json',
    }
    await axios.post(`${baseURL}/user_data_analysis?skinIssue=${_issue}`, data, {
        headers: headers
    }).then((_response) => {
        respData = _response.data;
    }).catch((error) => {
        console.log(error, "error")
    })
    return respData;
}

export { SendImages, ListSkinIssues, ListCategories }
