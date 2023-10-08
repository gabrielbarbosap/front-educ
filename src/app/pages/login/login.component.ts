import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  mensagem = window.speechSynthesis.cancel();

  constructor(private router: Router) {}

  entrar() {
    this.router.navigate(['subjects']);
  }
}
