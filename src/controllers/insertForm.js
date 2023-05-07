const Form = require('../models/orcamento')

const insertForm = async (request, response)=>{
    try {
        const insert  = await Form.create(request.body)
        return response.status(201).json({
            msg: 'Orçamento recebido com sucesso',     
            orcamento: insert   
        })
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = insertForm