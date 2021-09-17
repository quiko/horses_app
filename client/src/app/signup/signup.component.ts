import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

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
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  registerUser() {
    this.auth.registerUser(this.registerUserData).subscribe(
      res => console.log(res),
      error => console.log(error)
    )
  }

}
