const Sequelize = require('sequelize');
const database = require('../config/db')
const Receita = database.define('receita',{
    id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    data: {
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
    },
    valor: {
        type:Sequelize.DECIMAL(6,2),
        allowNull:false
    },
    taxista: {
        type:Sequelize.STRING(30),
        allowNull:false
    }
})
module.exports = Receita