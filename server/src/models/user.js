const mongoose = require('mongoose');

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



    //vamos definir o nosso model
    const User = mongoose.model('User', UserSchema);

    //vou exportar o Usuario daqui de dentro usando 
    module.exports = User;