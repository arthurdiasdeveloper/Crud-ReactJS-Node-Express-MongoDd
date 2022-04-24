//vamos importar o express
const express = require('express');
const bodyParser = require('body-parser');


//criar a aplicaçao chamando o express
const app = express();

//vou indicar que irei utilizar o bodyParser enviando Json
app.use(bodyParser.json());
//vou indicar que irei utilizar o bodyParser enviando uma url
app.use(bodyParser.urlencoded({ extended: false}));

/* 
//Rota de teste
app.get('/', (req, res)=>{
    res.send('Tudo certo!');
}); */


//ouvir a porta
app.listen(3000);