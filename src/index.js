// (async()=>{
 
//     const database = require('./config/db');
//     const User = require('./models/User')
//     const Automoveis = require('./models/Automoveis')
//     const Cliente = require('./models/Cliente')
//     const Servicos = require('./models/Servicos')
//     const Pedidos = require('./models/Pedidos')
//     await database.sync()

   
//  })();

const { request, response } = require('express')
const express = require('express')


const routes = require('./routes')

//require('./database')
const app = express()
app.use(express.json())

app.use(routes)

app.listen(3333,() => console.log('Server running at http://localhost:3333'));
 

