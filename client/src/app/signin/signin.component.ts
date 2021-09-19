import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  loginUserData = {
    email: '',
    password: ''
  }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      (res: any) => {
        localStorage.setItem('access_token', res.token)
        this.router.navigate(['/horses'])
      },
      error => console.log(error)
    )
  }

}
