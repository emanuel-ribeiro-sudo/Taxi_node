const Logs = require('../models/Logs')
module.exports={
    async index(req,res){
        try {
            const logs = await Logs.findAll();
            if(logs == "" || logs == null){
                return res.status(200).send({message:"Nenhum log registrado"});
            }
            return res.status(200).send(logs);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
        
    },
    async store(req,res){
        try{
        const logs = await Logs.create(req.body);
        return res.status(200).send({
            status:1,
            message: 'Log registrado com sucesso', 
            logs
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    },
};