const Servicos = require('../models/Servicos')
module.exports={
    async index(req,res){
        try {
            const servicos = await Servicos.findAll();
            if(servicos == "" || servicos == null){
                return res.status(200).send({message:"Nenhum servico encontrado ..."});
            }
            return res.status(200).send({servicos});
        } catch (err) {
            return res.status(400).json({ error: err });
        }
        
    },
    async store(req,res){
        try{
        const servico = await Servicos.create(req.body);
        
        return res.status(200).send({
            status:1,
            message: 'Servico Registrado com sucesso', 
            servico
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    },
    async update(req,res){
        try{
        await Servicos.update(req.body,
            {
                where: {
                    id_Servico:req.params.id_Servico
                }
            });

            return res.status(200).send({
                status:1,
                message: 'Servico Atualizado com sucesso'
            })
        }catch (err) {
            return res.status(400).json({error: err})
        }
    },
    async delete(req,res){
        try{
        await Servicos.destroy({
            where: {
                id_Servico:req.params.id_Servico
            }
        });
        return res.status(200).send({
            status:1,
            message: 'Servico Deletado com sucesso'
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    }
};