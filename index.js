const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

//Config
  //Template Engine
  app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
  app.set('view engine','handlebars')
  //Body parser
    app.use(bodyParser.urlencoded({extend:false }));
    app.use(bodyParser.json())
  //Conexão com o mysql
  

//Rotas
    app.get('/cad',function(req,res){
        res.render('formulario')
    })

    app.post('/add',function(req,res){
        req.body.titulo
        res.send('texto:'+ req.body.titulo + " " + 'conteúdo:' + " " + req.body.conteudo)
    })

app.listen(8081,function(){
    console.log("servidor rodando... ");
});