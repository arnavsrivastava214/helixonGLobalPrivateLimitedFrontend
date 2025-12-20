import { CommonModule } from "@angular/common"
import { Component, type OnInit } from "@angular/core"
import {  FormBuilder, type FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  showPassword = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    })
  }

  ngOnInit(): void {}
  get formControls() {
    return this.loginForm.controls
  }

  onSubmit(): void {
    this.submitted = true
    if (this.loginForm.invalid) {
      return
    }
    console.log(this.loginForm.value) 
   }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword
  }

}
