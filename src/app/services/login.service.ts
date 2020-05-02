import { Injectable } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private headers: Headers;

  constructor(private http: HttpClient,public router: Router) { }

  onLogin(user:any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post('/api/itee',{id:'5'},httpOptions).subscribe(response => {
      console.log(response);
    });
              
        // this.http.get('/api/item/2').subscribe(res => this.logSuss(res) )

  }

  logSuss(data) {
    alert("success:"+data.json)
    console.log(data.json);
    this.router.navigateByUrl('home');
  }
  logError(err: any) {
    alert("error")
    console.log(err);
}
  
}
