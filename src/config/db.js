const Sequelize = require('sequelize')

const sequelize = new Sequelize('EmpTaxi','Emanuel','Emanuel1.',{
    dialect:"mysql",
    host:'localhost',
    port:3306 
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
// const sequelize = new Sequelize('EmpTaxi', null, null, {
//   dialect: 'mssql',
//   dialectOptions: {
//     authentication: {
//       type: 'ntlm',
//       options: {
//         host: 'DESKTOP-TO2H7EE',
//         userName: 'sa',
//         password: 'Emanuel1.',
//         domain: 'WORKGROUP',
        
//       }
//     },
//     options: {
//       server:'DESKTOP-TO2H7EE',
//       instanceName: 'SQLEXPRESS'
//     }
//   }
// })

module.exports = sequelize;