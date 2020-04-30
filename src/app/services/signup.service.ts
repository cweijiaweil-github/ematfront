import { Injectable } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Http  , ResponseOptions , Headers  , URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private headers: Headers;
  constructor(private http: Http,public router: Router) { }

  onSignupBuyer(user:any){
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('/user/signupBuyer', user, {
            headers: this.headers
        }).pipe(map(
            data => this.logSuss(data),
            err => this.logError(err)
        ));

  }
  onSignupSeller(user:any){
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('/user/signupSeller', user, {
            headers: this.headers
        }).pipe(map(
            data => this.logSuss(data),
            err => this.logError(err)
        ));

  }

  logSuss(data) {
    console.log(data.json);
    this.router.navigateByUrl('succPage');
}
 logError(err: any) {
   console.log(err);
}
}
