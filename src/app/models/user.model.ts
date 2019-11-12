export class UserModel {
  nombre: string;
  foto:string;
  email: string;
  pais: string;
  perfil: ['ROLE_INVERSOR', 'ROLE_USER'];
  password: string;
  direccion: string;
  prefesion: string;
  fechaNacimiento: Date;
  sexo: string;
  activo: 1;
}
