const {Sequelize} = require('sequelize')
const connection = require('../database')

const Funcionario = connection.define('funcionario', {
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

module.exports = Funcionario