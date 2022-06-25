const Sequelize = require('sequelize');
const database = require('../config/db');
const Cliente = require('./Cliente')

const Pedidos = database.define('pedidos',{
    id_Pedido: {
        type:Sequelize.STRING,
        primaryKey:true,
        allowNull:false,
    },
    data: {
        type:Sequelize.DATE,
        allowNull:false
    },
    estado: {
        type:Sequelize.ENUM('Aceite','Recusado'),
        defaultValue: 'Sem resposta',
        allowNull:false
    },
},
)
Pedidos.Cliente = Pedidos.belongsTo(Cliente,{
    constraint:true, 
    foreignKey:'cliente_Id' 
});

Cliente.hasMany(Pedidos,{ 
    foreignKey:'cliente_Id' 
})
module.exports = Pedidos