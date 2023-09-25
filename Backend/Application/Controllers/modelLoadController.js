import { acneModel, darkCircleModel, pigmentationModel, poreModel, spotModel, wrinkleModel } from '../LoadModels/index.js';
import { imageResize, makeTemporaryImage, preProcessImage, predictScore, toBase64, transformPrediction } from '../Utils/utils.js';


var loadedAcneModel = await acneModel();
var loadedDarkCircleModel = await darkCircleModel();
var loadedPigmentationModel = await pigmentationModel();
var loadedPoresModel = await poreModel();
var loadedSpotsModel = await spotModel();
var loadedWrinkleModel = await wrinkleModel();

var getImage;
var resizedImage;
var preprocessedImage;
var prediction;
var finalMask;
var stringData;
var getScore;

async function getAcneData(_base64Image) {

    try {
        getImage = await makeTemporaryImage(_base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedAcneModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        getScore = await predictScore(stringData);
        return { getScore, stringData };
    } catch (error) {
        console.log("Acne Prediction Failure!",error)
    }

}
async function getDarkCircleData(_base64Image) {

    try {
        getImage = await makeTemporaryImage(_base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedDarkCircleModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        getScore = await predictScore(stringData);
        return { getScore, stringData };
    } catch (error) {
        console.log("DarkCircle Prediction Failure!")
    }

}
async function getPigmentData(_base64Image) {

    try {
        getImage = await makeTemporaryImage(_base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedPigmentationModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        getScore = await predictScore(stringData);
        return { getScore, stringData };
    } catch (error) {
        console.log("Pigmentation Prediction Failure!")
    }

}
async function getPoresData(_base64Image) {

    try {
        getImage = await makeTemporaryImage(_base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedPoresModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        getScore = await predictScore(stringData);
        return { getScore, stringData };
    } catch (error) {
        console.log("Pores Prediction Failure!")
    }

}
async function getSpotData(_base64Image) {

    try {
        getImage = await makeTemporaryImage(_base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedSpotsModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        getScore = await predictScore(stringData);
        return { getScore, stringData };
    } catch (error) {
        console.log("Spots Prediction Failure!")
    }

}
async function getWrinkleData(_base64Image) {

    try {
        getImage = await makeTemporaryImage(_base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedWrinkleModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        getScore = await predictScore(stringData);
        return { getScore, stringData };
    } catch (error) {
        console.log("Wrinkles Prediction Failure!")
    }

}


export { getAcneData, getDarkCircleData, getPigmentData, getPoresData, getSpotData, getWrinkleData }