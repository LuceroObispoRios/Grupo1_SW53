import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    this.errorMessage = '';
    const LoginData = this.loginForm.value;
    let warnings = "";

    console.log(LoginData.email);
    console.log(LoginData.password);

    if(!LoginData.email || !LoginData.password){
      warnings += `Se necesitan ambos campos para acceder <br>`;
    }

    if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(LoginData.email)){
      warnings += `Email incorrecto<br>`;
    }

    if(LoginData.password.length < 6){
      warnings += `Contraseña incorrecta<br>`;
    }

    this.errorMessage = warnings;

    if(!this.errorMessage){
      console.log(LoginData);
      
      

    }
    
    
  }

}
