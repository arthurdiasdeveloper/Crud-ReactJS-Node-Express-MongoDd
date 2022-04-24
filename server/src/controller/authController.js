const express = require('express');


//vamos precisar desse modo por causa do cadastro e login
const User = require('../models/user');

//definir e buscar do express router
//com isso vamos poder definir as nossas rotas
const router = express.Router();

//definir rota de cadastro
router.post('/register', async (req, res)=>{

    //nosso usuário possui é o email
    const { email } = req.body;

    //criar um novo usuário quando chamar essa rota
    try {
        if(await User.findOne({ email }))
        return res.status(400).send({error: 'User alredy exist!'});

        const user = await User.create(req.body);

        //remover a senha
        user.password = undefined;

        return res.send({ user });

    } catch (err) {
        return res.status(400).send({ error: 'Registration faild!'});
    }
    
});

module.exports = app => app.use('/auth', router)