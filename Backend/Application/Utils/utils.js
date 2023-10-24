import * as tf from '@tensorflow/tfjs-node';
import cv from "@techstark/opencv-js";
import Jimp from 'jimp';
import fs from 'fs';
var inc = 0;
async function makeTemporaryImage(_inputString) {

    try {
        fs.writeFile(`./GeneratedImages/FeatureImage${inc}.jpg`, await _inputString, { encoding: 'base64' }, function (err) { });

        var jimpSrc = await Jimp.read(`./GeneratedImages/FeatureImage${inc}.jpg`);
        inc += 1;
        return jimpSrc;
    } catch (error) {
        console.log("Image Creation Error")
    }

}
function imageResize(_inputImage) {
    /*
    This Method Resizes Image And Returns Gray Image
    */
    try {
        var readImage, imageSize, resizedImage, grayImage;

        // // //Read Image
        readImage = cv.matFromImageData(_inputImage);

        // // //Specify Size To be Resized
        imageSize = new cv.Size(256, 256);

        // // //Create Matrix for storing Resized Image
        resizedImage = new cv.Mat();
        cv.resize(readImage, resizedImage, imageSize);
        readImage.delete();

        // // //Create Matrix for storing Grayscale Image
        grayImage = new cv.Mat();
        cv.cvtColor(resizedImage, grayImage, cv.COLOR_BGR2GRAY);

        return grayImage;

    } catch (error) {
        console.log("ImageResize Error")
    }
}

function preProcessImage(_inputImage) {
    /*
    This Method Expands Dimensions And Returns Normalized Image
    */

    try {
        var grayedTensor, normalizedImage;
        // //Convert Gray Image To Matrix
        grayedTensor = tf.tensor(_inputImage.data, [_inputImage.rows, _inputImage.cols]);

        // // First Expansion
        const firsExpansion = grayedTensor.expandDims(2);

        // // Second Expansion
        const secondExpansion = firsExpansion.expandDims(0);

        // // Normalize Image
        normalizedImage = tf.image.resizeBilinear(secondExpansion, [256, 256]).div(tf.scalar(255));

        return normalizedImage;

    } catch (error) {
        console.log("Image Pre-processing Error")
    }

}


function transformPrediction(_originalPred) {
    /*
    This Transfrms The Prediction, Reshapes And Returns Final Mask .
    */

    try {
        var transformedImage, reShapedImage;
        // // Transform The Predicted Image
        transformedImage = tf.image.resizeBilinear(_originalPred, [256, 256]).mul(tf.scalar(255));
        // // Reshape Image
        // tf.zeros();
        reShapedImage = transformedImage.reshape([256, 256, 1]);

        return reShapedImage;

    } catch (error) {
        console.log("Transform ERROR!")
    }
}

async function toBase64(_inputTensor) {
    try {
        const imageBuffer = await tf.node.encodePng(_inputTensor);
        const data = Buffer.from(imageBuffer).toString("base64");

        return data;

    } catch (error) {
        console.log("Base64 Failure!")
    }
}

async function predictScore(_inputImage) {
    try {
        
        fs.writeFile('./GeneratedImages/ScoreImage.png', await _inputImage, { encoding: 'base64' }, function (err) { });
        
        var jimpSrc = await Jimp.read('./GeneratedImages/ScoreImage.png');
        
        
        var readImage = cv.matFromImageData(jimpSrc.bitmap);
        var getMatData = new cv.Mat();
        cv.threshold(readImage, getMatData, 0, 255, cv.THRESH_BINARY);
        readImage.delete();
        
        cv.cvtColor(getMatData, getMatData, cv.COLOR_BGR2GRAY);
        
        var getData = cv.countNonZero(getMatData);
        getMatData.delete();
        var one_percent = 2000 / 100;
        var getScore = getData / one_percent;
        let Score = Math.round(100 - getScore);
        return Score;
    } catch (error) {
        console.log("SCORE PREDICT ERROR")
    }
}

export { imageResize, makeTemporaryImage, preProcessImage, transformPrediction, toBase64, predictScore }