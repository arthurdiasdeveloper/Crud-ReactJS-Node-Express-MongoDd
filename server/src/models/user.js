const mongoose = require('../database');

//vou importar a bilbioteca bycrypt para encriptar a senha
const bycrypt = require('bcryptjs');

//defini os Schema (os campos que iremos ter)
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        //tipo obrigatorio
        require: true,
    },
    email: {
        type: String,
        //chave unica
        unique: true,
        //obrigatoria
        required: true,
        //forçar conversao em lowercase (caixa baixa)
        lowercase: true,
    },
    password: {
        type: String,
        //obrigatorio
        required: true,
        //para que a senha nao venha busca dos usuários
        select: false,
    },
    createdAt: {
        //anotar a data que o registro foi criado
        type: Date,
        default: Date.now,
    },

});

    //antes de salvar o usuario, vamos fazer o seguinte
    UserSchema.pre('save', async function (next) {
        //aqui podemos ter acesso ao this
        //this é o objeto que está sendo salvo
        const hash = await bycrypt.hash(this.password, 10);
        this.password = hash;


        next();


    });




//vamos definir o nosso model
const User = mongoose.model('User', UserSchema);

//vou exportar o Usuario daqui de dentro usando 
module.exports = User;