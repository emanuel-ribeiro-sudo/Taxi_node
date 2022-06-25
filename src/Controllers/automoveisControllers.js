const Automoveis = require('../models/Automoveis')
module.exports={
    async index(req,res){
        try {
            const automoveis = await Automoveis.findAll();
            if(automoveis == "" || automoveis == null){
                return res.status(200).send({message:"Nenhum automovel registrado"});
            }
            return res.status(200).send({automoveis});
        } catch (err) {
            return res.status(400).json({ error: err });
        }
        
    },
    async store(req,res){
        try{
        const automovel = await Automoveis.create(req.body);
        
        return res.status(200).send({
            status:1,
            message: 'Automovel registrado com sucesso', 
            automovel
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    },
    async update(req,res){
        try{
        await Automoveis.update(req.body,
            {
                where: {
                    matricula:req.params.matricula
                }
            });

            
            return res.status(200).send({
                status:1,
                message: 'Automovel Atualizado com sucesso'
            })
        }catch (err) {
            return res.status(400).json({error: err})
        }
    },
    async delete(req,res){
        try{
        await Automoveis.destroy({
            where: {
                matricula:req.params.matricula
            }
        });
        return res.status(200).send({
            status:1,
            message: 'Automovel Deletado com sucesso'
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    }
};