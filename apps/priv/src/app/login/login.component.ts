import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auth, signInWithEmailAndPassword} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;
  constructor(public fb: FormBuilder,
              private auth: Auth,
              public router: Router) {

    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  submit() {
    if(this.loginForm.valid) {
      signInWithEmailAndPassword(
        this.auth,
        this.loginForm.value.login,
        this.loginForm.value.password
      )
        .then((result) => {
          this.router.navigate(['home']);
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }
  }

}
