import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookpageComponent } from './bookpage/bookpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{ 
  path:'',redirectTo:'login',pathMatch:'full'
},
{
  path:'login', component:LoginComponent
},
{
  path:'signup',component:SignupComponent
},
{
  path:'bookpage',component:BookpageComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
