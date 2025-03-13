import Descritor from '../classes/Descritor';
import Empresa from "../classes/Empresa";
import Endereco from "../classes/Endereco";
import Funcionario from "../classes/Funcionario";
import Telefone from "../classes/Telefone";

let endereco = new Endereco(123, 'Av. Dos imigrantes', 'Jardim do Sol', 'São Bento')
let telefone = new Telefone('11', '987654321')
let funcionario = new Funcionario('Robert DeNiro', '123456', '999.999.999-99', endereco, telefone)
let funcionarios = [funcionario]
let empresa = new Empresa('ABC LTDA', 'Mercado Online', '01.234.567/0001-89', endereco, funcionarios)

let descritor = new Descritor

console.log(descritor.exibir(empresa))