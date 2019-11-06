import {TipoUsuario} from '../util/enuns/tipo-usuario.enum';
import {Endereco} from './endereco.model';
import {Servico} from './servico.model';

export interface Barbearia {
  id: string;
  nome: string;
  email: string;
  senha: string;
  tipoUsuario: TipoUsuario;
  endereco: Endereco;
  telefone: string;
  servicos: Servico;

}
