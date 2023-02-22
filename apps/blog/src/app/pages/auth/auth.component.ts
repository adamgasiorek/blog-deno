import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auth, signInWithEmailAndPassword} from "@angular/fire/auth";
import {Router} from "@angular/router";



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  public loginForm: FormGroup;

  constructor(public fb: FormBuilder,
              private router: Router,
              private auth: Auth) {
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
          this.router.navigate(['notes', 'private']);
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }
  }

}
