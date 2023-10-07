const express = require("express");
const app = express();


app.get('/',function(req,res){
    res.send("seja bem vindo ao meu app!");
});

app.get('/sobre', function(req,res){
    res.send("Pagina sobre");
})

app.get("/blog",function(req,res){
    res.send("Bem vindo ao blog");
})

app.get("/ola/:nome/:profissao",function(req,res){
    res.send("Ola" + ' ' + req.params.nome + "Seu cargo e: " + req.params.profissao);

})

app.listen(8081,function(){
    console.log("servidor rodando... ");
});