export class Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
  role: string;
  img:string;

  constructor(nombre: string, email: string, password: string, role?: string, id?: number,img?:string) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.role = role;
    this.img = img;
  }

}
