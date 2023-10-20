const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp','root','root',{
    host:"localhost",
    dialect:'mysql',
    port:3307
    })

module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}