import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Update } from './update';

@Injectable()
export class UpdateService{
  url: string;
  header: any;
    // tslint:disable-next-line:variable-name
    constructor(private http: HttpClient){
        this.url = 'http://localhost:49210/Api/Update';
        const headerSettings: {[name: string]: string | string[]; } = {};
        this.header = new HttpHeaders(headerSettings);
         }

    getAllUpdates(): Observable<Update[]>{
        return this.http.get<Update[]>(this.url + '/GetUpdates');
        }

    getUpdateById(updateId: string): Observable<Update>{
        return this.http.get<Update>(this.url + '/GetUpdates/' + updateId);
      }

    addUpdate(update: Update): Observable<Update[]>{
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post<Update[]>(this.url + '/AddUpdate/', update, httpOptions);
    }

    deleteUpdate(updateId: string): Observable<number>{
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.delete<number>(this.url + '/DeleteUpdate/' + updateId, httpOptions);
    }
}

