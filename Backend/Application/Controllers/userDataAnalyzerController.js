import { Op } from 'sequelize';
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


async function getScoreCategory(_data) {
    let category = '';
    if (!(_data < 0)) {
        await ScoreCategory.findAll({
            where: {
                minScore: {
                    [Op.lt]: _data
                },
                maxScore: {
                    [Op.gte]: _data
                }
            }
        }).then((_response) => {
            category = _response[0].dataValues['categoryName'];
        })
    }
    else {
        category = 'Poor'
    }
    return category;
}
async function analyzeUserData(_request, _response) {
    var acneScore;
    var spotsScore;
    var wrinklesScore;
    var darkCirclesScore;
    var openPoresScore;
    var pigmentationScore;
    var resultsScore = {};
    let scoreCategory;
    if (_request.query.skinIssue.toUpperCase() === 'ACNE') {
        try {
            acneScore = await getAcneData(_request.body.base64Image);
            scoreCategory = await getScoreCategory(acneScore.getScore);
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
        try {
            spotsScore = await getSpotData(_request.body.base64Image);
            scoreCategory = await getScoreCategory(spotsScore.getScore);
            response.data = [{
                issueName: _request.query.skinIssue,
                score: spotsScore.getScore,
                scoreCategory: scoreCategory,
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
        try {
            wrinklesScore = await getWrinkleData(_request.body.base64Image);
            scoreCategory = await getScoreCategory(wrinklesScore.getScore);
            response.data = [{
                issueName: _request.query.skinIssue,
                score: wrinklesScore.getScore,
                scoreCategory: scoreCategory,
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
        try {
            darkCirclesScore = await getDarkCircleData(_request.body.base64Image);
            scoreCategory = await getScoreCategory(darkCirclesScore.getScore);
            response.data = [{
                issueName: _request.query.skinIssue,
                score: darkCirclesScore.getScore,
                scoreCategory: scoreCategory,
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
        try {
            openPoresScore = await getPoresData(_request.body.base64Image);
            scoreCategory = await getScoreCategory(openPoresScore.getScore);
            response.data = [{
                issueName: _request.query.skinIssue,
                score: openPoresScore.getScore,
                scoreCategory: scoreCategory,
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
        try {
            pigmentationScore = await getPigmentData(_request.body.base64Image);
            scoreCategory = await getScoreCategory(pigmentationScore.getScore);
            response.data = [{
                issueName: _request.query.skinIssue,
                score: pigmentationScore.getScore,
                scoreCategory: scoreCategory,
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