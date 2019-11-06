import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../../model/Login.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AutentificacaoService {

  constructor(protected http: HttpClient) {
  }

  usuarioLogado: User;

  login(login: Login): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}/usuario/login`, login);
  }


  // preencheUsuario(usuario: User) {
  //   this.usuarioLogado = usuario;
  //
  // }
}
