import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import './Application/DBModels/index.js'
import { allScoreCategories, allSkinIssues } from './Application/Controllers/dataLoadController.js';
import { analyzeUserData } from './Application/Controllers/userDataAnalyzerController.js';
import { remedyImport, tipImport } from './Application/Controllers/importsController.js';
dotenv.config();
const app = express();
// app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: false }));

//Basic Local Route
app.get('/', (request, response) => {
    response.send('This is the basic route!');
});


app.get('/list_skinIssues', allSkinIssues);
app.get('/list_scoreCategories', allScoreCategories);


app.post('/user_data_analysis', analyzeUserData);
app.post('/importTips', tipImport);
app.post('/importRemedies', remedyImport);

app.listen(process.env.SERVER_PORT, () => {
    console.log("App Is Running On Port:", process.env.SERVER_PORT);
});