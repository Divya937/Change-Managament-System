import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { UpdateListComponent } from './update/update-list.component';


const routes: Routes = [
  {path: 'AddUpdate', component: UpdateComponent},
  {path: 'GetUpdates', component: UpdateListComponent},
  {path: 'RegisterUser', component: RegisterComponent},
  {path: 'UserLogin', component: LoginComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

