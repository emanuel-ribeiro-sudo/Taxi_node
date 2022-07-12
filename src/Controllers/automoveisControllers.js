const Automoveis = require('../models/Automoveis')
module.exports={
    async getMatricula(req,res){
        try {
            const automoveis = await Automoveis.findOne({
                where:{
                    taxista_Id:req.body.taxista_Id,
                    ativo:req.body.ativo
                }
            });
            if(automoveis == "" || automoveis == null){
                return res.status(200).send(automoveis);
            }
            return res.status(200).send(automoveis);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
        
    },
    async index(req,res){
        try {
            const automoveis = await Automoveis.findAll();
            if(automoveis == "" || automoveis == null){
                return res.status(200).send({message:"Nenhum automovel registrado"});
            }
            return res.status(200).send(automoveis);
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

        const {taxista_Id} = req.body;
        try{
        await Automoveis.update({taxista_Id},
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