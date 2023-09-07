import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { getAcneData, getDarkCircleData, getPigmentData, getPoresData, getSpotData, getWrinkleData } from './Application/Controllers/spotController.js';
import './Application/DBModels/index.js'
dotenv.config();
const app = express();
// app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: false }));

//Basic Local Route
app.get('/', (request, response) => {
    response.send('This is the basic route!');
});


app.post('/analyzeAcne', getAcneData);
app.post('/analyzeDariCircle', getDarkCircleData);
app.post('/analyzePigmentation', getPigmentData);
app.post('/analyzePores', getPoresData);
app.post('/analyzeSpot', getSpotData);
app.post('/analyzeWrikle', getWrinkleData);

app.listen(process.env.SERVER_PORT, () => {
    console.log("App Is Running On Port:", process.env.SERVER_PORT);
});