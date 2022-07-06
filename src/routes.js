const express = require('express');

const AutomoveisController = require('./Controllers/automoveisControllers');
const UserController = require('./Controllers/userControllers')
const PedidosController = require('./Controllers/pedidosControllers')
const ServicosController = require('./Controllers/servicosControllers')
const ClientesController = require('./Controllers/clienteControllers')
const LogsController = require('./Controllers/logsControllers')
const ReceitaController = require('./Controllers/receitaControllers')

const authMiddleware = require('./middlewares/auth');

const router = express.Router();



router.get ("/", (req, res) => {
    res.json ("Bem-vindo");
  });
 
// router.use(authMiddleware);
  // Users
router.get('/users' ,UserController.index);

router.post('/addusers',UserController.store); 

router.put('/users/:bi',UserController.update);

router.delete('/users/:bi',UserController.delete);

router.post('/users/login',UserController.login);

router.post('/users/cargo',UserController.getCargo);

router.post('/users/bi',UserController.getBi);

router.get('/users/:bi',UserController.getOne);

  // Clientes
  router.get('/clientes' ,ClientesController.index);

  router.post('/addclientes',ClientesController.store);
  
  router.put('/clientes/:bi',ClientesController.update);
  
  router.delete('/clientes/:bi',ClientesController.delete);
  
  router.post('/clientes/login',ClientesController.login);

  // Pedidos
router.get('/nhapedido/:automovel',PedidosController.getTaxiPedidos);

router.get('/pedidos',PedidosController.getAll);

router.get('/users/:cliente_Id/pedidos',PedidosController.index);

router.post('/users/pedidos',PedidosController.store);

router.delete('/users/:id/pedidos',PedidosController.delete);

router.put('/users/pedidosUpdate/:id_Pedido',PedidosController.update);

// Receita

 router.get('/receita',ReceitaController.index);

 router.post('/receita',ReceitaController.store);
 
 router.delete('/receita/:id',ReceitaController.delete);
 
 router.put('/receita/:id',ReceitaController.update);


// Pedidos

//  router.get('/users/:biuser/pedidos',PedidosController.index);

//  router.post('/users/:biuser/pedidos',PedidosController.store);
 
//  router.delete('/users/:id/pedidos',PedidosController.delete);
 
//  router.put('/users/:id/pedidos',PedidosController.update);

  //Automoveis
router.post('/automoveis/matricula', AutomoveisController.getMatricula)

router.get('/automoveis', AutomoveisController.index)

router.post('/automoveis', AutomoveisController.store)

router.delete('/automoveis/:matricula', AutomoveisController.delete)

router.put('/automoveis/:matricula', AutomoveisController.update)

  //logs

  router.get('/logs', LogsController.index)

  router.post('/logs', LogsController.store)

module.exports = router; 