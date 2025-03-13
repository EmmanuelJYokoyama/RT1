export default class Descritor {
    public exibir(empresa) {
        let descritor = `Razão Social: ${empresa.razaoSocial} \nNome Fantasia: ${empresa.nomeFantasia} \nCNPJ: ${empresa.cnpj} \nEndereço: \nRua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} Número: ${empresa.endereco.numero} \n\nFuncionários: \n`
        empresa.funcionarios.forEach(funcionario => {
            descritor+= `Nome: ${funcionario.nome}\n`
            descritor+= `Matricula: ${funcionario.matricula}\n`
            descritor+= `CPF: ${funcionario.cpf}\n`
            descritor+= `Rua: ${funcionario.endereco.rua} Bairro: ${funcionario.endereco.bairro} Cidade: ${funcionario.endereco.cidade} Número: ${funcionario.endereco.numero}`
        })
        return descritor
    }
}