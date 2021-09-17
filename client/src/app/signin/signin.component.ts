import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

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
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      res => console.log(res),
      error => console.log(error)
    )
  }

}
