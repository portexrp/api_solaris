const Funcionario = require('../../models/funcionario')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cors = require('cors');


const session = async (request, response) => {

    console.log('SENHA: ',request.body.password)
   
    try {
    
        if (!request.body.email) {
            return response.status(403).json({ mensagem: "Usuário ou Senha inválido" })
        }
    
        const login = await Funcionario.findOne({
            where: {
                email: request.body.email
            }
        });
        
        if (!login || request.body.email == '') {
            return response.status(403).json({ mensagem: "Usuário ou Senha inválido" })
        };
        
        const pass = bcrypt.compare(request.body.password, login.senha);
            
        if (!pass) {
            return response.status(403).json({ mensagem: "Usuário ou Senha inválido" })
        };
    
        const token = jwt.sign(
            {
            id: login.id
            }, 
                'secret_key',
            {
                expiresIn: '1h'
            } 
        )
        
        //.cookie('token', token, {maxAge: 1800000, httpOnly: true, secure: false})
        response.status(200).json({name: login.nome, email: login.email, token:  token})
        
    } catch (error) {
        return response.status(500).json({ mensagem: "Não foi possível atender sua solicitação" })
    }}

    module.exports = session