const Pedidos = require('../models/Pedidos')
module.exports={
    async index(req,res){
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
        try{
        await Pedidos.update(req.body,
            {
                where: {
                    id_Pedido:req.params.id_Pedido
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