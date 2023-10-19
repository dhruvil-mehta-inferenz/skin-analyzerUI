export default function tipsInfo(_seq, _DataTypes) {
    _seq.define('tipsInfo', {
        skinIssue: {
            type: _DataTypes.STRING,
            defaultValue: ''
        },
        type: {
            type: _DataTypes.STRING,
            defaultValue: ''
        },
        category: {
            type: _DataTypes.STRING,
            defaultValue: ''
        },
        description: {
            type: _DataTypes.STRING,
            defaultValue: ''
        },
    });
}