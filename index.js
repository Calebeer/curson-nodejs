const express = require("express");
const app = express();
const handlebars = require('express-handlebars')

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemaCadastro','root','root',{
    host:"localhost",
    dialect:'mysql',
    port:3307
})

//Config
  //Template Engine
  app.engine('handlebars',handlebars({defaultLayout:'main'}))
  app.set('view engine','handlebars')

app.listen(8081,function(){
    console.log("servidor rodando... ");
});