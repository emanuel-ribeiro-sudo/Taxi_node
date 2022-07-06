const Pedidos = require('../models/Pedidos')
const Automoveis = require('../models/Automoveis')
module.exports={
    async getTaxiPedidos(req,res){
        
        try {
            const pedidos = await Automoveis.findByPk(req.params.automovel,{
                include: Pedidos,
                // where:{
                //     automovel: req.body.automovel
                // }
            }
            );
            if(pedidos == "" || pedidos == null){
                return res.status(200).send(pedidos);
            }
            return res.status(200).send([pedidos]);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
        
    },
    async getAll(req,res){
        try {
            const pedidos = await Pedidos.findAll();
            if(pedidos == "" || pedidos == null){
                return res.status(200).send({message:"Nenhum pedido encontrado ..."});
            }
            return res.status(200).send(pedidos);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
        
    },
    async index(req,res){
        try {
            const pedidos = await Pedidos.findAll({
                where: {
                    cliente_Id:req.params.cliente_Id
                }
            }
            );
            if(pedidos == "" || pedidos == null){
                return res.status(200).send(pedidos);
            }
            return res.status(200).send(pedidos);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
        
    },
    async store(req,res){
        try{
        const pedido = await Pedidos.create(req.body);
        
        return res.status(200).send({
            status:1,
            message: 'Pedido Registrado com sucesso', 
            pedido
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    },
    async update(req,res){
        const {estado} = req.body;
        const {id_Pedido} = req.params;
        try{
        await Pedidos.update(
            {estado},
            {
                where: {
                    id_Pedido:id_Pedido
                }
            });

            return res.status(200).send({
                status:1,
                message: 'Pedido Atualizado com sucesso'
            })
        }catch (err) {
            return res.status(400).json({error: err})
        }
    },
    async delete(req,res){
        try{
        await Pedidos.destroy({
            where: {
                id_Pedido:req.params.id_Pedido
            }
        });
        return res.status(200).send({
            status:1,
            message: 'Pedido Deletado com sucesso'
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    }
};