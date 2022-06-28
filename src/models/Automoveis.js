const Sequelize = require('sequelize');
const database = require('../config/db');
const Pedidos = require('./Pedidos');
const User = require('./User')
const Automoveis = database.define('automoveis',{
    matricula: {
        type:Sequelize.STRING,
        primaryKey:true,
        allowNull:false,
    },
    lugares: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    ativo: {
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    estado: {
        type:Sequelize.ENUM('Livre','Ocupado'),
        defaultValue: 'Livre',
        allowNull:false
    },
},
)
User.hasMany(Automoveis,{ 
    foreignKey:'taxista_Id' 
})
Automoveis.hasMany(Pedidos,{
    foreignKey:'automovel'
})
module.exports = Automoveis