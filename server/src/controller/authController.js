const express = require('express');


//vamos precisar desse modo por causa do cadastro e login
const User = require('../models/user');

//definir e buscar do express router
//com isso vamos poder definir as nossas rotas
const router = express.Router();

//definir rota de cadastro
router.post('/register', async (req, res)=>{
    //criar um novo usuário quando chamar essa rota
    try {
        const user = await User.create(req.body);

        return res.send({ user });

    } catch (err) {
        return res.status(400).send({ error: 'Registration faild!'});
    }
    
});