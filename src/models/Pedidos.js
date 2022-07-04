const Sequelize = require('sequelize');
const database = require('../config/db');
const User = require('./User')

const Pedidos = database.define('pedidos',{
    id_Pedido: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    data: {
        type:Sequelize.DATE,
        allowNull:true
    },
    estado: {
        type:Sequelize.ENUM('Aceite','Recusado','Sem resposta'),
        defaultValue: 'Sem resposta',
        allowNull:false
    },
},
)
User.Cliente = Pedidos.belongsTo(User,{
    constraint:true, 
    foreignKey:'cliente_Id' 
});

User.hasMany(Pedidos,{ 
    foreignKey:'cliente_Id' 
})
module.exports = Pedidos