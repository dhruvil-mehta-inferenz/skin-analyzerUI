import * as tf from '@tensorflow/tfjs-node';

var acnesModel;
var darkCirclesModel;
var pigmentationsModel;
var poresModel;
var spotsModel;
var wrinklesModel;

class L2 {

    static className = 'L2';

    constructor(config) {
       return tf.regularizers.l1l2(config)
    }
}
tf.serialization.registerClass(L2);
async function acneModel() {

    try {
        acnesModel = await tf.loadLayersModel('http://localhost:8080/Models/Acne/model.json');
        console.log("Acne Models Loaded SuccessFully!")
        return acnesModel;
    } catch (error) {
        console.log("Acne Loading Models Failed!")
    }
}
async function darkCircleModel() {

    try {
        darkCirclesModel = await tf.loadLayersModel('http://localhost:8080/Models/DarkCircle/model.json');
        console.log("DarkCircle Models Loaded SuccessFully!")
        return darkCirclesModel;
    } catch (error) {
        console.log("DarkCircle Loading Models Failed!",error)
    }
}
async function pigmentationModel() {

    try {
        pigmentationsModel = await tf.loadLayersModel('http://localhost:8080/Models/Pigmentation/model.json');
        console.log("Pigmentation Models Loaded SuccessFully!")
        return pigmentationsModel;
    } catch (error) {
        console.log("Pigmentation Loading Models Failed!")
    }
}
async function poreModel() {

    try {
        poresModel = await tf.loadLayersModel('http://localhost:8080/Models/Pores/model.json');
        console.log("Pores Models Loaded SuccessFully!")
        return poresModel;
    } catch (error) {
        console.log("Pores Loading Models Failed!")
    }
}
async function spotModel() {

    try {
        spotsModel = await tf.loadLayersModel('http://localhost:8080/Models/Spots/model.json');
        console.log("Spots Models Loaded SuccessFully!")
        return spotsModel;
    } catch (error) {
        console.log("Spots Loading Models Failed!")
    }
}
async function wrinkleModel() {

    try {
        wrinklesModel = await tf.loadLayersModel('http://localhost:8080/Models/Wrinkles/model.json');
        console.log("Wrinkles Models Loaded SuccessFully!")
        return wrinklesModel;
    } catch (error) {
        console.log("Wrinkles Loading Models Failed!")
    }
}

export { acneModel, darkCircleModel, pigmentationModel, poreModel, spotModel, wrinkleModel }