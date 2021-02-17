import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Register } from '../app/register';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url: string;
  token: string;
  header: any;
  constructor(private http: HttpClient) {

    this.Url = 'http://localhost:5500/Api/Login';

    const headerSettings: {[name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  // tslint:disable-next-line:typedef
  Login(login: Register): Observable<Register>{
    // tslint:disable-next-line:no-debugger
    return this.http.post<Register>(this.Url + 'UserLogin', login, { headers: this.header});
  }
   // tslint:disable-next-line:typedef
   CreateUser(register: Register): Observable<Register[]>
   {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Register[]>(this.Url + '/RegisterUser/', register, httpOptions);
   }
}
