import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';
import cifrar from 'jsrsasign';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    const token = localStorage.getItem('TOKEN');

    if ( token != null && token.length > 0 ) {
      if ( cifrar.jws.JWS.verifyJWT(token,  '', {alg: ['HS256']}) ) {
        return true;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Logout',
          text: 'Tu sesión ha exiprado por favor inicia sesión nuvemente.'
        });
        return false;
      }
    }
    Swal.fire({
      icon: 'error',
      title: 'Permisos',
      text: 'Debes crear una cuenta para poder acceder.'
    });
    return false;
  }
}
