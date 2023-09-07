import seq from '../DBModels/index.js';

const SkinIssues = seq.model('skinissues');
const ScoreCategories = seq.model('scorecategories');

let response = {
    message: 'Success',
    status: 200,
    data: []
}
async function allSkinIssues(_request, _response) {

    await SkinIssues.findAll({
        attributes: { exclude: ['id', 'isActive', 'createdAt', 'updatedAt'] },
        where: {
            isActive: 1
        }
    }).then((__response) => {
        response.data = __response
    }).catch((_error) => {
        console.log("Failed To Fetch Skin Issues", _error);
        // response.data = __response;
    });

    _response.json(response);

}

async function allScoreCategories(_request, _response) {
    await ScoreCategories.findAll({
        attributes: { exclude: ['id', 'isActive', 'createdAt', 'updatedAt'] },
        where: {
            isActive: 1
        }
    }).then((__response) => {
        response.data = __response;
    }).catch((_error) => {
        console.log("Failed To Fetch Score Categories", _error);
        // response.data = __response;
    });

    _response.json(response);

}

export { allSkinIssues, allScoreCategories }