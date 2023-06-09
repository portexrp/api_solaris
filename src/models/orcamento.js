const {Sequelize} = require('sequelize')
const connection = require('../database')

const Orcamento = connection.define('orcamento', {
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
    instalation: {
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
    },
    status: {
        type: Sequelize.ENUM,
        values: ['nao_atendido','em_atendimento', 'atendido', 'com_impedimento' ],
        defaultValue: 'nao_atendido'
    }
})

module.exports = Orcamento