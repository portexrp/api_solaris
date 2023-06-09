
const Orcamento = require('../../models/orcamento')

const getOrcamento = async (request, response) => {
    try {
        const orcamento = await Orcamento.findAll()
        
       return response.status(201).json({ orcamento })
       

    } catch (error) {
        return response.status(500).json({msg: "não podemos atender sua solicitação."})
    }
}

module.exports = getOrcamento