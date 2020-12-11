const connection = require('../connection');
const Sequilize = require('sequelize');

class Account extends Sequilize.Model {}

Account.init(
    {
        role: {
            type: Sequilize.STRING(45),
            primaryKey: true
        },
        email: {
            type: Sequilize.STRING(45),
            allowNull: false
        },
        login: {
            type: Sequilize.STRING(45),
            allowNull: false
        },
        password: {
            type: Sequilize.STRING(45),
            allowNull: false
        },
        state: {
            type: Sequilize.BOOLEAN(),
            allowNull: false
        },
        avatar: {
            type: Sequilize.STRING(300),
            allowNull: true
        }
    },
    {
        sequelize: connection,
        freezeTableName: true,
        modelName: 'Account'
    }
);

module.exports = Account
