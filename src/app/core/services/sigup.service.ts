import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class SigupService {

  constructor(private readonly http: HttpClient) { }

  execute(data: Signup) {
    return this.http.post(`/api/influencers`, data);
  }
}
