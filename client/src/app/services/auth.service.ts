import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signupUrl = 'http://localhost:3000/users/signup'
  private signinUrl = 'http://localhost:3000/users/signin'

  constructor(private http: HttpClient) { }
  registerUser(user: object) {
    return this.http.post(this.signupUrl, user, { withCredentials: true })
  }
  loginUser(user: object) {
    return this.http.post(this.signinUrl, user, { withCredentials: true })
  }
  loggedIn(){
    return !!localStorage.getItem('access_token')
  }
  getToken(){
    return localStorage.getItem('access_token')
  }
}
