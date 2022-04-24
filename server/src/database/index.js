//defini uma constante
const mongoose = require('mongoose');
//vou conectar ao meu banco de dados
mongoose.connect('mongodb+srv://MongoDb2:MongoDb22Eu@crud.f5i8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    //useMongoClient: true
});
//indicar a classe de promisses que  o mongoose vai utilizar
mongoose.Promise = global.Promise;

module.exports = mongoose;