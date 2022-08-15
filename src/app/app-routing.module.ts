import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestDashComponent } from './rest-dash/rest-dash.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'signup', component:SignupComponent
  },
  {
    path: 'restaurant', component:RestDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
