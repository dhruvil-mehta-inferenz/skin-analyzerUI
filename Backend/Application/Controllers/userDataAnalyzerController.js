import seq from '../DBModels/index.js';
import { getAcneData, getDarkCircleData, getPigmentData, getPoresData, getSpotData, getWrinkleData } from './modelLoadController.js';
const UserInfo = seq.model('userinfo');
const ScoreHistory = seq.model('scorehistory');
const ScoreCategory = seq.model('scorecategories');

let response = {
    message: 'Success',
    status: 200,
    data: [{}]
};
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let mainDate = year + '-' + month + '-' + date;

async function analyzeUserData(_request, _response) {
    var acneScore;
    var spotsScore;
    var wrinklesScore;
    var darkCirclesScore;
    var openPoresScore;
    var pigmentationScore;
    var resultsScore = {};
    if (_request.query.skinIssue.toUpperCase() === 'ACNE') {
        acneScore = await getAcneData(_request.body.base64Image);
        let scoreCategory = () => {
            ScoreCategory.findAll({})
        }
        try {
            response.data = [{
                issueName: _request.query.skinIssue,
                score: acneScore.getScore,
                scoreCategory: scoreCategory,
                mask: acneScore.stringData
            }];
            resultsScore['acne'] = acneScore.getScore;

        } catch (error) {
            response.message = "Failed To Predict Results For Acne. Please Try Again!";
            response.status = 400;
            response.data = []
        }
    }
    if (_request.query.skinIssue.toUpperCase() === 'SPOTS') {
        spotsScore = await getSpotData(_request.body.base64Image);
        try {
            response.data = [{
                issueName: _request.query.skinIssue,
                score: spotsScore.getScore,
                scoreCategory: 'Excellent',
                mask: spotsScore.stringData
            }];
            resultsScore['spots'] = spotsScore.getScore;

        } catch (error) {
            response.message = "Failed To Predict Results For Spots. Please Try Again!";
            response.status = 400;
            response.data = []
        }
    }
    if (_request.query.skinIssue.toUpperCase() === 'WRINKLES') {
        wrinklesScore = await getWrinkleData(_request.body.base64Image);
        try {
            response.data = [{
                issueName: _request.query.skinIssue,
                score: wrinklesScore.getScore,
                scoreCategory: 'Excellent',
                mask: wrinklesScore.stringData
            }];
            resultsScore['wrinkles'] = wrinklesScore.getScore;

        } catch (error) {
            response.message = "Failed To Predict Results For Wrinkles. Please Try Again!";
            response.status = 400;
            response.data = []
        }
    }
    if (_request.query.skinIssue.toUpperCase() === 'DARK_CIRCLES') {
        darkCirclesScore = await getDarkCircleData(_request.body.base64Image);
        try {
            response.data = [{
                issueName: _request.query.skinIssue,
                score: darkCirclesScore.getScore,
                scoreCategory: 'Excellent',
                mask: darkCirclesScore.stringData
            }];
            resultsScore['darkCircles'] = darkCirclesScore.getScore;

        } catch (error) {
            response.message = "Failed To Predict Results For Dark Cirles. Please Try Again!";
            response.status = 400;
            response.data = []
        }
    }
    if (_request.query.skinIssue.toUpperCase() === 'OPEN_PORES') {
        openPoresScore = await getPoresData(_request.body.base64Image);
        try {
            response.data = [{
                issueName: _request.query.skinIssue,
                score: openPoresScore.getScore,
                scoreCategory: 'Excellent',
                mask: openPoresScore.stringData
            }];
            resultsScore['openPores'] = openPoresScore.getScore;

        } catch (error) {
            response.message = "Failed To Predict Results For Open Pores. Please Try Again!";
            response.status = 400;
            response.data = []
        }
    }
    if (_request.query.skinIssue.toUpperCase() === 'PIGMENTATION') {
        pigmentationScore = await getPigmentData(_request.body.base64Image);
        try {
            response.data = [{
                issueName: _request.query.skinIssue,
                score: pigmentationScore.getScore,
                scoreCategory: 'Excellent',
                mask: pigmentationScore.stringData
            }];
            resultsScore['pigmentation'] = pigmentationScore.getScore;

        } catch (error) {
            response.message = "Failed To Predict Results For Pigmentation. Please Try Again!";
            response.status = 400;
            response.data = []
        }
    }


    await UserInfo.findOne({ where: { userUuid: _request.body.uuid } }).then(async (_uniqueUser) => {
        await ScoreHistory.findAll({
            limit: 1,
            where: {
                userUuid: _uniqueUser.dataValues.id
            },
            order: [['updatedAt', 'DESC']]
        }).then(async (_userScoreHistory) => {
            if ((_userScoreHistory[0].dataValues.updatedAt === mainDate) === false) {
                await ScoreHistory.create({
                    userUuid: _uniqueUser.dataValues.id,
                    concerns: resultsScore
                })
            }
            else if ((_userScoreHistory[0].dataValues.updatedAt === mainDate) === true) {
                await ScoreHistory.update({
                    userUuid: _uniqueUser.dataValues.id,
                    concerns: {
                        ...JSON.parse(_userScoreHistory[0].dataValues.concerns),
                        ...resultsScore
                    }
                }, {
                    where: {
                        updatedAt: mainDate
                    }
                })
            }

        });
    }).catch(async () => {
        await UserInfo.create({
            userUuid: _request.body.uuid,
            source: _request.body.source
        }).then(async (_createdUser) => {
            await ScoreHistory.create({
                userUuid: _createdUser.dataValues.id,
                concerns: {
                    acne: acneScore?.getScore,
                    spots: spotsScore?.getScore,
                    wrinkles: wrinklesScore?.getScore,
                    darkcircles: darkCirclesScore?.getScore,
                    openpores: openPoresScore?.getScore,
                    pigmentation: pigmentationScore?.getScore,
                }
            })
        });

    });

    _response.json(response);
}

export { analyzeUserData }