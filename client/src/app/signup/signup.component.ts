import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData = {
    email: '',
    password:''
  }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    this.auth.registerUser(this.registerUserData).subscribe(
      (res: any) => {
        localStorage.setItem('access_token', res.token)
        this.router.navigate(['/horses'])
      },
      error => console.log(error)
    )
  }

}
