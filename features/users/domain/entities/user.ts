
class User {
  id? : number;
  nombre : string;
  correo : string;
  password : string;

  constructor (
      nombre : string,
      correo : string,
      pasword : string,
      id? : number,
  ) {
      this.id = id;
      this.nombre = nombre;
      this.correo = correo;
      this.password = pasword;
    }
}

export default User;