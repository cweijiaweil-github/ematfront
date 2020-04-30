import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { LoginGuard } from './guard/login/loginGuard';
import { SuccPageComponent } from './signup/succPage/succ-page/succ-page.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch: "full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"succPage",component:SuccPageComponent},
  // {path:"home/:diff",component:HomeComponent,canActivate: [LoginGuard]},
  {path:"home/:diff",component:HomeComponent},
  {path:"**",component:Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[LoginGuard]
})
export class AppRoutingModule { }
