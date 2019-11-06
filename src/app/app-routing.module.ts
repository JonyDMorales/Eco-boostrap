import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {NewUserComponent} from './pages/new-user/new-user.component';
import {NewProyectComponent} from './pages/new-proyect/new-proyect.component';
import {ProyectsComponent} from './pages/proyects/proyects.component';
import {AuthGuard} from './services/auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'proyect',
    component: NewProyectComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'all/proyects', component: ProyectsComponent },
  { path: '**' , pathMatch: 'full' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
