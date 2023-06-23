import * as tf from '@tensorflow/tfjs-node';
import cv from "@techstark/opencv-js";
import Jimp from 'jimp';
import fs from 'fs';
import { myImageString } from './myimage.js';

async function check() {
    const baseInitial = "data:image/png;base64,";
    try {
        fs.writeFile('./ModelImages/FeatureImage.png', myImageString, { encoding: 'base64' }, function (err) { });
        const spotsModel = await tf.loadLayersModel('http://localhost:8080/Models/Spots/model.json');
        var jimpSrc = await Jimp.read('./GeneratedImages/FeatureImage.png');
        var SecondjimpSrc = await Jimp.read('./GeneratedImages/ScoreImage.png');


        async function imageResize(_inputImage) {
            /*
            This Method Resizes Image And Returns Gray Image
            */
            var readImage, imageSize, resizedImage, grayImage;

            // //Read Image
            readImage = cv.matFromArray(_inputImage);

            // //Specify Size To be Resized
            imageSize = new cv.Size(256, 256);

            // //Create Matrix for storing Resized Image
            resizedImage = new cv.Mat();
            cv.resize(readImage, resizedImage, imageSize);

            // //Create Matrix for storing Grayscale Image
            grayImage = new cv.Mat();
            cv.cvtColor(resizedImage, grayImage, cv.COLOR_BGR2GRAY);

            return grayImage;
        }

        function preProcessImage(_inputImage) {
            /*
            This Method Expands Dimensions And Returns Normalized Image
            */
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
        }

        function transformPrediction(_originalPred) {
            /*
            This Transfrms The Prediction, Reshapes And Returns Final Mask .
            */
            var transformedImage, reShapedImage;
            // // Transform The Predicted Image
            transformedImage = tf.image.resizeBilinear(_originalPred, [256, 256]).mul(tf.scalar(255));

            // // Reshape Image
            reShapedImage = transformedImage.reshape([256, 256, 1]);

            return reShapedImage;
        }

        function spotsAnalysis(_inputImage) {
            /*
            This method Predicts data for spots And Returns Prediction Data.
            */
            var prediction, threshold;
            threshold = 0.5;

            prediction = spotsModel.predict(_inputImage);
            return prediction;
        }

        function predictScore(_inputImage) {
            var readImage = cv.matFromImageData(SecondjimpSrc.bitmap);
            var getMatData = new cv.Mat();;
            cv.threshold(readImage, getMatData, 0, 255, cv.THRESH_BINARY);

            cv.cvtColor(getMatData, getMatData, cv.COLOR_BGR2GRAY);

            var getData = cv.countNonZero(getMatData);
            var one_percent = 2000 / 100;
            var getScore = getData / one_percent;
            let spotScore = Math.round(100 - getScore);
            console.log("--->", spotScore)
        }

        // var getResizedImage = await imageResize(jimpSrc.bitmap)
        // var getPreProcessedImage = preProcessImage(getResizedImage);
        // var getPredictedResults = spotsAnalysis(getPreProcessedImage);
        // var getFinalMask = transformPrediction(getPredictedResults);


        // var readSec = cv.matFromImageData(SecondjimpSrc.bitmap);
        // var dst = new cv.Mat();
        // cv.cvtColor(readSec, dst, cv.COLOR_BGR2BGRA);

        // var temp2 = new cv.Mat();

        // cv.threshold(dst, temp2, 0, 255, cv.THRESH_BINARY);
        // let rgbaPlanes = new cv.MatVector();
        // cv.split(temp2, rgbaPlanes)
        // let R = rgbaPlanes.get(0);
        // let G = rgbaPlanes.get(1);
        // let B = rgbaPlanes.get(2);

        // let mergedPlanes = new cv.MatVector();
        // mergedPlanes.push_back(R);
        // mergedPlanes.push_back(G);
        // mergedPlanes.push_back(B);

        // cv.merge(mergedPlanes, temp2);
        // console.log(temp2)
        // const imageBuffer = await tf.node.encodePng(getFinalMask);
        // const data = Buffer.from(imageBuffer).toString("base64");

        // fs.writeFile('./GeneratedImages/image2.png', data, { encoding: 'base64' }, function (err) {
        //     console.log('File created');
        // });
        // predictScore();
    } catch (error) {
        console.log("--->CATCH:", error)

    }
}

check();