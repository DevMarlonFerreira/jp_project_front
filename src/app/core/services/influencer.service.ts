import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Influencer } from '../models/influencer.model';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  constructor(private readonly http: HttpClient) { }

  execute(id: string) {
    return this.http.get<Influencer>(`/api/influencer?${id}`);
  }
}
