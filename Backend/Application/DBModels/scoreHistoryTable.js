export default function ScoreHistory(_seq, _DataTypes) {
    _seq.define('scorehistory', {
        userUuid: {
            type: _DataTypes.STRING,
            defaultValue: '',
            allowNull: false,
        },
        concerns: {
            type: _DataTypes.JSON,
            defaultValue: {},
            allowNull:false
        }
    });
}