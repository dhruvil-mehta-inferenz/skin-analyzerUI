export default function UserInfo(_seq, _DataTypes) {
    _seq.define('userinfo', {
        userUuid: {
            type: _DataTypes.STRING,
            defaultValue: '',
            allowNull: false,
            unique: true
        },
        source: {
            type: _DataTypes.STRING,
            defaultValue: 'WEB',
            allowNull: false
        }
    });
}