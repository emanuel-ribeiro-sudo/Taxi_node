const Cliente = require('../models/Cliente');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const autConfig = require('../config/auth.json')

function generateToken(params = {}){
    return jwt.sign(params,autConfig.secret, {
        expiresIn: 78300
    })
}

module.exports={
    async login(req,res){
        try{
        const {password, email} = req.body;
        const cliente = await Cliente.findOne({where: {email}});
        if (!cliente){
            return res.status(400).send({
                status:0,
                message:'Email ou senha incorreto!'
            });

        }
        if (!bcrypt.compareSync(password,cliente.password)){
            return res.status(400).send({
                status:0,
                message:'password Incorecta'
            });
        }  
        // const user_bi = cliente.bi;
        // await User.update({
        //     logado
        // },{
        //     where:{
        //         bi:user_bi
        //     }
        // });  
        cliente.password = undefined;

        const token = generateToken({id_Cliente: cliente.id_Cliente})
 
        return res.status(200).send({
            status:1,
            message:"Usuario Logado com sucesso",
            cliente,token
        });
    }catch (err) {
        return res.status(400).json({error: err})
    }
    },
    async index(req,res){
        try{
         const clientes = await Cliente.findAll();
         if(clientes == "" || clientes == null){
             return res.status(200).send({message:"Nenhum usuario cadastrado"});
         }
         return res.status(200).send({users: clientes});
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    },
    async store(req,res){
       try{
        const cliente = await Cliente.create(req.body);

        const token = generateToken({id_Cliente: cliente.id_Cliente})
        
        return res.status(200).send({
            status:1,
            message: 'Usuario cadastrado com sucesso', 
            cliente,token
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    },
    async update(req,res){
        try{
        await Cliente.update(req.body,
            {
                where: {
                    id_Cliente:req.params.id_Cliente
                }
            });

            
            return res.status(200).send({
                status:1,
                message: 'Usuario Atualizado com sucesso'
            })
        }catch (err) {
            return res.status(400).json({error: err})
        }
    },
    async delete(req,res){
        try{
        await Cliente.destroy({
            where: {
                id_Cliente:req.params.id_Cliente
            }
        });
        return res.status(200).send({
            status:1,
            message: 'Usuario Deletado com sucesso'
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    }
};