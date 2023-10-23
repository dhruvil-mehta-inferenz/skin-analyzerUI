export default function remediesInfo(_seq, _DataTypes) {
    _seq.define('remediesInfo', {
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
        title: {
            type: _DataTypes.STRING,
            defaultValue:''
        },
        description: {
            type: _DataTypes.STRING,
            defaultValue: ''
        },
    });
}