import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
import { Http  , ResponseOptions , Headers  , URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private headers: Headers;
  constructor(private http: Http,public router: Router) { }

  onLogin(user:any) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('/user/login', user, {
                headers: this.headers
            }).pipe(map(
                data => this.logSuss(data),
                err => this.logError(err)
            ));
  }

  logSuss(data) {
     console.log(data.json);
     this.router.navigateByUrl('home');
}
  logError(err: any) {
    console.log(err);
}
  
}
