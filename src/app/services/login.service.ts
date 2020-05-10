import { Injectable, SystemJsNgModuleLoader } from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  
  private headers: Headers;
  constructor(private http: HttpClient,public router: Router) { }

  getInfo(): string {
    return 'test service';
  }
  
  onLogin(user:any) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    
    this.http.post("/apiuser/user/login",user,httpOptions).subscribe( val => {
      this.router.navigateByUrl(""+val["key"]);
    },
    error => {
      this.router.navigateByUrl("errPage");
    }
    );
  }
  
}
