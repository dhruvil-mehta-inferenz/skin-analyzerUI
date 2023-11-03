import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import './Application/DBModels/index.js'
import { allRemedies, allScoreCategories, allSkinIssues, allTips } from './Application/Controllers/dataLoadController.js';
import { analyzeUserData } from './Application/Controllers/userDataAnalyzerController.js';
import { remedyImport, tipImport } from './Application/Controllers/importsController.js';
dotenv.config();
const app = express();
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node JS API Documentation For Skin Analyzer',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:5000/'
            }
        ]
    },
    apis: ['./swaggerGet.js','./swaggerPost.js']
}
const swaggerSpecs = swaggerJSDoc(swaggerOptions);
app.use('/swaggerAPI', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: false }));

//Basic Local Route
app.get('/', (request, response) => {
    response.send('This is the basic route!');
});


app.get('/list_skinIssues', allSkinIssues);
app.get('/list_scoreCategories', allScoreCategories);
app.get('/tips', allTips);
app.get('/remedies', allRemedies);


app.post('/user_data_analysis', analyzeUserData);
app.post('/importTips', tipImport);
app.post('/importRemedies', remedyImport);

app.listen(process.env.SERVER_PORT, () => {
    console.log("App Is Running On Port:", process.env.SERVER_PORT);
});