import XLSX from 'xlsx';
import seq from '../DBModels/index.js';
const tipData = seq.model('tipsInfo');
const remedyData = seq.model('remediesInfo');
let response = {
    message: 'Success',
    status: 200,
    data: [{}]
};
function tipImport(_request, _response) {
    var workbook = XLSX.readFile('Application/Controllers/TipMaster.xlsx');
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    for (let i = 0; i < xlData.length; i++) {
        const element = xlData[i];
        tipData.create({
            skinIssue: element.skin_issue,
            type: element.level,
            category: element.score_category,
            description: element.description
        })
    }
    _response.json(response)
}
function remedyImport(_request, _response) {
    var workbook = XLSX.readFile('Application/Controllers/RemedyMaster.xlsx');
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    for (let i = 0; i < xlData.length; i++) {
        const element = xlData[i];
        remedyData.create({
            skinIssue: element.skin_issue,
            type: element.level,
            category: element.score_category,
            description: element.description
        })
    }
    _response.json(response)
}
export { tipImport, remedyImport }