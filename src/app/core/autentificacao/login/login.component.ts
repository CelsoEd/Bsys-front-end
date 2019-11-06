import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AutentificacaoService} from '../autentificacao.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private autentificacaoService: AutentificacaoService,
  ) {
  }

  public usuario: User;

  loginForm: FormGroup;


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }


  login() {
    this.autentificacaoService
      .login(this.loginForm.value)
      .subscribe(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['home']);
      });
  }
}
