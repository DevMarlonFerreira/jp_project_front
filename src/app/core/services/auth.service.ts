import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor() { }
isAuthenticated(){
    return this.isLoggedIn;
  }
}

// import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { map, distinctUntilChanged, tap, shareReplay } from 'rxjs/operators';

// import { Router } from '@angular/router';
// import { Auth } from '../models/auth.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private currentInfluencerSubject = new BehaviorSubject<Auth | null>(null);
//   public currentInfluencer = this.currentInfluencerSubject
//     .asObservable()
//     .pipe(distinctUntilChanged());

//   // public isLoggedIn = this.currentInfluencer.pipe(map((influencer) => !!influencer));

//   name: string = '';
//   token: string = '';

//   constructor(private readonly router: Router) {}

//   isLoggedIn() {
//     if (this.token) return true;
//     else return false;

//     // console.log(this.currentInfluencer.pipe(map((influencer) => influencer)))
//     // return this.currentInfluencer.pipe(map((influencer) => influencer));
//     // return this.currentInfluencer.pipe(map((influencer) => influencer));
//   }

//   login(influencer: Auth) {
//     this.name = influencer.name;
//     this.token = influencer.token;
//     this.currentInfluencerSubject.next(influencer);
//   }

//   logout(): void {
//     this.name = '';
//     this.token = '';
//     this.currentInfluencerSubject.next(null);
//     void this.router.navigate(['/']);
//   }
// }
