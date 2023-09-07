import seq from '../DBModels/index.js';
import { getAcneData, getDarkCircleData, getPigmentData, getPoresData, getSpotData, getWrinkleData } from './modelLoadController.js';
let response = {
    message: 'Success',
    status: 200,
    data: []
}
async function analyzeUserData(_request, _response) {
    //WORK ON DB
    if (_request.query.skinIssue.toUpperCase() === 'ACNE') {
        var check = await getAcneData(_request.body.base64Image);
        console.log("==>",check)
    }
    if (_request.query.skinIssue.toUpperCase() === 'SPOTS') {
        var check = await getSpotData(_request.body.base64Image);
        console.log("==>",check)
    }
    if (_request.query.skinIssue.toUpperCase() === 'WRINKLES') {
        var check = await getWrinkleData(_request.body.base64Image);
        console.log("==>",check)
    }
    if (_request.query.skinIssue.toUpperCase() === 'DARK_CIRCLES') {
        var check = await getDarkCircleData(_request.body.base64Image);
        console.log("==>",check)
    }
    if (_request.query.skinIssue.toUpperCase() === 'OPEN_PORES') {
        var check = await getPoresData(_request.body.base64Image);
        console.log("==>",check)
    }
    if (_request.query.skinIssue.toUpperCase() === 'PIGMENTATION') {
        var check = await getPigmentData(_request.body.base64Image);
        console.log("==>",check)
    }
    _response.json({});
}

export { analyzeUserData }