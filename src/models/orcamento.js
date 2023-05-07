const {Sequelize} = require('sequelize')
const connection = require('../database')

const Form = connection.define('form', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address:{
        type: Sequelize.STRING        
    },
    citiesForm: {
        type: Sequelize.STRING        
    },
    ufForm: {
        type: Sequelize.STRING
    },
    powerDistributor: {
        type: Sequelize.STRING
    },
    consumption: {
        type: Sequelize.STRING
    },
    roof: {
        type: Sequelize.STRING
    },
    financing: {
        type: Sequelize.STRING
    }
})

module.exports = Form