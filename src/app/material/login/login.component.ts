import { ListUserService } from 'src/app/services/list-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-material',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  resulset !: string;
  formLogin!: FormGroup
  userlogin: any[] = []

  constructor(private fb: FormBuilder, private loginService: ListUserService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.email]]
    })
    // this.formLogin = new FormGroup({
    //   username: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required])
    // })
  }
  onLogin() {
    this.loginService.getUser()
    .subscribe(res => {
      this.userlogin = res

      for (let user of this.userlogin) {

        if (user.username == this.formLogin.value.username && user.email == this.formLogin.value.password) {
          this.router.navigate(['/home'])
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Welcome, you are successfully logged in',
            showConfirmButton: false,
            timer: 1000
          })
        }else{this.resulset='Username and password incorrect'}
      }
    })

  }
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
