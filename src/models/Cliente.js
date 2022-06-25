const Sequelize = require('sequelize');
const database = require('../config/db')
// const User = require('./user')
// const Automoveis = require('./automoveis')

const Cliente = database.define('cliente',{
    id_Cliente: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    nome: {
        type:Sequelize.STRING,
        allowNull:false
    },
    email: {
        type:Sequelize.STRING,
        allowNull:false
    },
    password: {
        type:Sequelize.STRING,
        allowNull:true
    },
    telefone: {
        type:Sequelize.STRING(7),
        allowNull:false
    },
    token: {
        type:Sequelize.STRING,
        allowNull:false
    },
    // static associate(models){
    //     this.belongsToMany(models.User,{foreignKey:'bi_user', as:'aluga'}); 
    // }
},{ 
    hooks:
    {
        beforeCreate:(cleinte) =>{
            const salt = bcrypt.genSaltSync();
            cleinte.password = bcrypt.hashSync(cleinte.password,salt);
        },
    }
})
// Aluguers.User = Aluguers.belongsTo(User,{
//     constraint:true, 
//     foreignKey:'biuser' 
// });

// User.hasMany(Aluguers,{ 
//     foreignKey:'biuser' 
// })
// Automoveis.hasOne(Aluguers,{ 
//     foreignKey:'matricula' 
// })

module.exports = Cliente
