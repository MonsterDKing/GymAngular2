
export class Cliente {

  Id?: number;
  nombre: string;
  sexo: boolean;
  codigo: number;
  fechaIngreso: Date;
  estatus: boolean = true;
  img?: string;

  constructor(nombre: string, sexo: boolean, fechaIngreso: Date, Id?: number, img?: string) {
    this.nombre = nombre;
    this.sexo = sexo;
    this.fechaIngreso = fechaIngreso;
    this.Id = Id;
    this.img = img;
  }



}
