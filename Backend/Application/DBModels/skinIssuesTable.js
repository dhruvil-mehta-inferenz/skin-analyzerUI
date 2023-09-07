export default function SkinIssues(_seq, _DataTypes) {
    _seq.define('skinissues', {
        issueName: {
            type: _DataTypes.STRING,
            defaultValue: 'Basic Skin Issue Name'
        },
        issueColor: {
            type: _DataTypes.STRING,
            defaultValue: '#000000'
        },
        issueDefination: {
            type: _DataTypes.STRING,
            defaultValue: 'Defination'
        },
        displayOrder: {
            type: _DataTypes.INTEGER,
            defaultValue: 0
        },
        isActive: {
            type: _DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
}