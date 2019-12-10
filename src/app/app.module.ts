import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterTransparentComponent } from './components/footer-transparent/footer-transparent.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { NewProyectComponent } from './pages/new-proyect/new-proyect.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { ProyectComponent } from './pages/proyect/proyect.component';
import { DropFileDirective } from './directives/drop-file.directive';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    FooterTransparentComponent,
    NewUserComponent,
    NewProyectComponent,
    ProyectsComponent,
    ProyectComponent,
    DropFileDirective,
    UserHomeComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
