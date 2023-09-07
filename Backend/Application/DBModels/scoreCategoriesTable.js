export default function ScoreCategories(seq, DataTypes) {
    seq.define('scorecategories', {
        categoryName: {
            type: DataTypes.STRING,
            defaultValue: 'Basic Category Name'
        },
        categoryColor: {
            type: DataTypes.STRING,
            defaultValue: '#000000'
        },
        minScore: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        maxScore: {
            type: DataTypes.INTEGER,
            defaultValue: 100
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    });
}