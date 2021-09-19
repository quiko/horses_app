import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private horsesUrl = "http://localhost:3000/users/secret";

  constructor(private http: HttpClient) { }
  getHorses() {
    return this.http.get<any>(this.horsesUrl, { withCredentials: true })
  }
}
