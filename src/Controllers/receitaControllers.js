const Receita = require('../models/Receita')
module.exports={
    async index(req,res){
        try {
            const receita = await Receita.findAll();
            if(receita == "" || receita == null){
                return res.status(200).send(receita);
            }
            return res.status(200).send(receita);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
        
    },
    async store(req,res){
        try{
        const receita = await Receita.create(req.body);
        
        return res.status(200).send({
            status:1,
            message: 'Receita Registrado com sucesso', 
            receita
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    },
    async update(req,res){
        try{
        await Receita.update(req.body,
            {
                where: {
                    id:req.params.id
                }
            });

            return res.status(200).send({
                status:1,
                message: 'Receita Atualizado com sucesso'
            })
        }catch (err) {
            return res.status(400).json({error: err})
        }
    },
    async delete(req,res){
        const {id}= req.params;
        try{
        await Receita.destroy({
            where: {
                id:id
            }
        });
        return res.status(200).send({
            status:1,
            message: 'Receita Deletado com sucesso'
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    }
};