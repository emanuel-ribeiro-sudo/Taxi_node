// (async()=>{
 
//     const database = require('./config/db');
//     const User = require('./models/User')
//     const Automoveis = require('./models/Automoveis')
//     const Cliente = require('./models/Cliente')
//     const Servicos = require('./models/Servicos')
//     const Pedidos = require('./models/Pedidos')
//     const Logs = require('./models/Logs')
//     const Receita = require('./models/Receita')
//     await database.sync()   
//     //  const automoveis = await Automoveis.findByPk('ST-16-YU', 
//     //     {
//     //         include: Pedidos,User,
//     //     });
//     // const pedido = await Pedidos.findAll(
//     //     {
//     //         include: Automoveis,
//     //     });
   
//     //     console.log(pedido);
//   })();

const { request, response } = require('express')
const express = require('express')


const routes = require('./routes')

//require('./database')
const app = express()
app.use(express.json())

app.use(routes) 

app.listen(3333,() => console.log('Server running at http://localhost:3333'));
 

