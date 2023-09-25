export default function ScoreHistory(_seq, _DataTypes) {
    _seq.define('scorehistory', {
        userUuid: {
            type: _DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        concerns: {
            type: _DataTypes.JSON,
            defaultValue: {},
            allowNull:false
        },
        createdAt:{
            type: _DataTypes.DATEONLY,
            defaultValue: _DataTypes.NOW
        },
        updatedAt:{
            type: _DataTypes.DATEONLY,
            defaultValue: _DataTypes.NOW
        }
    });
}