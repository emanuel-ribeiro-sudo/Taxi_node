const Sequelize = require('sequelize')

const sequelize = new Sequelize('EmpTaxi','sa','Emanuel1.',{
    dialect:"mssql",
    host:'localhost',
    port:1433
})
// const sequelize = new Sequelize('EmpTaxi', 'sa', 'Emanuel1.', {
//     dialect: 'mssql',
//     dialectOptions: {
//       options: {
//         useUTC: false,
//         dateFirst: 1,
//       }
//     }
//   })

module.exports = sequelize;