export default function SkinIssues(seq, DataTypes) {
    seq.define('skinissues', {
        issueName: {
            type: DataTypes.STRING,
            defaultValue: 'Basic Skin Issue Name'
        },
        issueColor: {
            type: DataTypes.STRING,
            defaultValue: '#000000'
        },
        issueDefination: {
            type: DataTypes.STRING,
            defaultValue: 'Defination'
        },
        displayOrder: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
}