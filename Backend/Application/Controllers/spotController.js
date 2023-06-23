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
const baseInitial = "data:image/png;base64,";

var getAcneData = async function (req, res, next) {

    try {
        getImage = await makeTemporaryImage(req.body.base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedAcneModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        getScore = await predictScore(stringData);

        // res.send(baseInitial + stringData);
        res.json(
            { "score": getScore }
        );
    } catch (error) {
        console.log("Acne Prediction Failure!",error)
    }

}
var getDarkCircleData = async function (req, res, next) {

    try {
        getImage = await makeTemporaryImage(req.body.base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedDarkCircleModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        res.send(baseInitial + stringData);
    } catch (error) {
        console.log("DarkCircle Prediction Failure!")
    }

}
var getPigmentData = async function (req, res, next) {

    try {
        getImage = await makeTemporaryImage(req.body.base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedPigmentationModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        res.send(baseInitial + stringData);
    } catch (error) {
        console.log("Pigmentation Prediction Failure!")
    }

}
var getPoresData = async function (req, res, next) {

    try {
        getImage = await makeTemporaryImage(req.body.base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedPoresModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        res.send(baseInitial + stringData);
    } catch (error) {
        console.log("Pores Prediction Failure!")
    }

}
var getSpotData = async function (req, res, next) {

    try {
        getImage = await makeTemporaryImage(req.body.base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedSpotsModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        res.send(baseInitial + stringData);
    } catch (error) {
        console.log("Spots Prediction Failure!")
    }

}
var getWrinkleData = async function (req, res, next) {

    try {
        getImage = await makeTemporaryImage(req.body.base64Image);
        resizedImage = imageResize(getImage.bitmap);
        preprocessedImage = preProcessImage(resizedImage);
        prediction = loadedWrinkleModel.predict(preprocessedImage);
        finalMask = transformPrediction(prediction);
        stringData = await toBase64(finalMask);
        res.send(baseInitial + stringData);
    } catch (error) {
        console.log("Wrinkles Prediction Failure!")
    }

}


export { getAcneData, getDarkCircleData, getPigmentData, getPoresData, getSpotData, getWrinkleData }