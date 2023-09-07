export default function ScoreCategories(_seq, _DataTypes) {
    _seq.define('scorecategories', {
        categoryName: {
            type: _DataTypes.STRING,
            defaultValue: 'Basic Category Name'
        },
        categoryColor: {
            type: _DataTypes.STRING,
            defaultValue: '#000000'
        },
        minScore: {
            type: _DataTypes.INTEGER,
            defaultValue: 0
        },
        maxScore: {
            type: _DataTypes.INTEGER,
            defaultValue: 100
        },
        isActive: {
            type: _DataTypes.BOOLEAN,
            default: false
        }
    });
}