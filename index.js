const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Config
  //Template Engine
  app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
  app.set('view engine','handlebars')
  //Body parser
    app.use(bodyParser.urlencoded({extend:false }));
    app.use(bodyParser.json())
  //Conexão com o mysql
  

//Rotas
    
    app.get('/',function(req,res){
        res.render('home')
    })

    app.get('/cad',function(req,res){
        res.render('formulario')
    })

    app.post('/add',function(req,res){
        Post.create({
            titulo:req.body.titulo,
            conteudo:req.body.conteudo
        })
        .then(function(){res.redirect('/')})
        .catch(function(){res.send("Deu erro")})
    })

app.listen(8081,function(){
    console.log("servidor rodando... ");
});