import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  execute(data: Login) {
    return this.http.post(`/api/sessions`, data);
  }
}
