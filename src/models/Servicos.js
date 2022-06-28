const Sequelize = require('sequelize');
const database = require('../config/db');
const Pedidos = require('./Pedidos')
const Automoveis = require('./Automoveis')
const Servicos = database.define('servicos',{
    id_Servico: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    data_inicio: {
        type:Sequelize.DATE,
        allowNull:false,
    },
    estado: {
        type:Sequelize.ENUM('Em Curso','Terminado'),
        defaultValue: 'Em Curso',
        allowNull:false
    },
    valorPagar: {
        type:Sequelize.DECIMAL(6,2),
        allowNull:false
    }
},
)
Pedidos.hasOne(Servicos,{ 
        foreignKey:'pedido_Id' 
    })

Automoveis.hasMany(Servicos,{ 
    foreignKey:'taxi_Id' 
})
module.exports = Servicos