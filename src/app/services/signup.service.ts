import { Injectable } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private headers: Headers;
  constructor(private http: HttpClient,public router: Router) { }

  onSignupBuyer(user:any){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post("/api/signup/buyer",user,httpOptions).subscribe( val => {
      this.router.navigateByUrl("code200Page/signup");
    },
    error => {
      this.router.navigateByUrl("errPage");
    }
    );
  }
  onSignupSeller(user:any){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post("/api/signup/seller",user,httpOptions).subscribe( val => {
      this.router.navigateByUrl("code200Page/signup");
    },
    error => {
      this.router.navigateByUrl("errPage");
    }
    );

  }

}
