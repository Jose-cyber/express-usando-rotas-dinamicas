//importando o express 
var express = require('express');

//definindo constante que vai receber o modulo expresss
const app = express();


//criando rotas usando express

app.get("/", function(req, res){
    res.send('<h1>Cadastro</h1>');
});

// rota dinamica usando express
app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("<h1>olá "+req.params.nome+"<br>Seu cargo é :"+req.params.cargo+"<br>E sua cor favorita é :"+req.params.cor+"</h1>");
});




//ultima linha do codigo
app.listen(8080, function(){
    console.log('servidor express rodando');
});