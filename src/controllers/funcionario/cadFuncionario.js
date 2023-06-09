const bcrypt = require('bcrypt')
const Funcionario = require('../../models/funcionario')


const cadFuncionario = async (request, response)=>{
  try {

  console.log(request.body)

        const senha = await bcrypt.hash(request.body.senha, 10)
        const cadastro = {
            nome : request.body.nome,
            email: request.body.email,
            senha: senha
        }
    
        const novoFuncionario = await Funcionario.create(cadastro)
        return response.status(200).json({
            msg: `Cadastro do funcionário ${cadastro.nome} efetuado com sucesso!`
        })
        
    } catch (error) {

        return response.status(500).json({
            msg: "Não foi possível atender sua solicitação."
        })
        
    }
   
}

module.exports = cadFuncionario