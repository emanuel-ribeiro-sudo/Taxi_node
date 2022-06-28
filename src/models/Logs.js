const Sequelize = require('sequelize');
const database = require('../config/db')
const Logs = database.define('logs',{
    acao: {
        type:Sequelize.STRING,
        primaryKey:true,
        allowNull:false
    },
    data: {
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
    },
    usuario: {
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports = Logs