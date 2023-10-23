import seq from '../DBModels/index.js';

const SkinIssues = seq.model('skinissues');
const ScoreCategories = seq.model('scorecategories');
const Tips = seq.model('tipsInfo');
const Remedies = seq.model('remediesInfo');

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

async function allTips(_request, _response) {
    let data = [];
    let retData = [];
    let issueName = '';
    let categoryName = '';
    let type = '';
    if (_request.query.skinIssue?.toUpperCase()) {
        issueName = _request.query.skinIssue.toUpperCase()
    }
    if (_request.query.categoryName?.toUpperCase()) {
        categoryName = _request.query.categoryName.toUpperCase()
    }
    if (_request.query.type?.toUpperCase()) {
        type = _request.query.type.toUpperCase()
    }
    await Tips.findAll().then((__response) => {
        for (let i = 0; i < __response.length; i++) {
            const element = __response[i];
            data.push(element.dataValues);
        }
        if (issueName !== '' && categoryName !== '' && type !== '') {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (issueName === element.skinIssue.toUpperCase() && categoryName === element.category.toUpperCase() && type === element.type.toUpperCase()) {
                    retData.push(element.description)
                }
            }
        }
        else {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                retData.push(element.description)
            }
        }
        response.data = {}
        response.data['content'] = retData;
    }).catch((_error) => {
        console.log("Failed To Fetch Tips", _error);
    });

    _response.json(response);
}

async function allRemedies(_request, _response) {
    let data = [];
    let retData = {};
    let cont = [];
    let issueName = '';
    let categoryName = '';
    let type = '';
    if (_request.query.skinIssue?.toUpperCase()) {
        issueName = _request.query.skinIssue.toUpperCase()
    }
    if (_request.query.categoryName?.toUpperCase()) {
        categoryName = _request.query.categoryName.toUpperCase()
    }
    if (_request.query.type?.toUpperCase()) {
        type = _request.query.type.toUpperCase()
    }
    await Remedies.findAll().then((__response) => {
        for (let i = 0; i < __response.length; i++) {
            const element = __response[i];
            data.push(element.dataValues);
        }
        if (issueName !== '' && categoryName !== '' && type !== '') {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (issueName === element.skinIssue.toUpperCase() && categoryName === element.category.toUpperCase() && type === element.type.toUpperCase()) {
                    retData['title'] = element.title;
                    retData['description'] = element.description;
                    cont.push(retData);
                }
            }
        }
        else {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                retData['title'] = element.title;
                retData['description'] = element.description;
                cont.push(retData);
            }
        }
        response.data = {}
        response.data['content'] = cont;
    }).catch((_error) => {
        console.log("Failed To Fetch Tips", _error);
    });

    _response.json(response);
}
export { allSkinIssues, allScoreCategories, allTips, allRemedies }