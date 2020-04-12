import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes = [
    {path:"",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"home",component:HomeComponent}
]

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);