const User = require('../models/User');
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
        const {email,senha} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user){
            return res.status(400).send({
                status:0,
                message:'Email ou senha incorreto!'
            });

        }
        if (!bcrypt.compareSync(senha,user.senha)){
            return res.status(400).send({
                status:0,
                message:'Senha Incorecta'
            });
        }  
        // const user_bi = user.bi;
        // await User.update({
        //     logado
        // },{
        //     where:{
        //         bi:user_bi
        //     }
        // });  
        user.senha = undefined;

        const token = generateToken({bi: user.bi})
 
        return res.status(200).send({
            status:1,
            message:"Usuario Logado com sucesso",
            user,token
        });
    }catch (err) {
        return res.status(400).json({error: err})
    }
    },
    async index(req,res){
        try{
         const users = await User.findAll();
         if(users == "" || users == null){
             return res.status(200).send({message:"Nenhum usuario cadastrado"});
         }
         return res.status(200).send({users});
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    },
    async store(req,res){
       try{
        const user = await User.create(req.body);

        const token = generateToken({bi: user.bi})
        
        return res.status(200).send({
            status:1,
            message: 'Usuario cadastrado com sucesso', 
            user,token
        })
    }catch (err) {
        return res.status(400).json({error: err})
    }
    },
    async update(req,res){
        try{
        await User.update(req.body,
            {
                where: {
                    bi:req.params.bi
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
        await User.destroy({
            where: {
                bi:req.params.bi
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