import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {NewUserComponent} from './pages/new-user/new-user.component';
import {NewProyectComponent} from './pages/new-proyect/new-proyect.component';
import {ProyectsComponent} from './pages/proyects/proyects.component';
import {AuthGuard} from './services/auth.guard';
import {ProyectComponent} from './pages/proyect/proyect.component';
import {UserHomeComponent} from './pages/user-home/user-home.component';
import {AdminHomeComponent} from './pages/admin-home/admin-home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'home-user', component: UserHomeComponent },
  { path: 'home-admin', component: AdminHomeComponent },
  { path: 'proyect',
    component: NewProyectComponent
    //canActivate: [ AuthGuard ]
  },
  { path: 'proyect-details',
    component: ProyectComponent
  },
  { path: 'all/proyects', component: ProyectsComponent },
  { path: '**' , pathMatch: 'full' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
