
class Treatment {
  id?: number;
  nombreTratamiento: string;
  fechaInicio: Date;
  fechaFinal: Date;
  intervaloDosis: string;
  status?: string;
  medicamento:{
    id?:number,
    nombre:string,
    descripcion:string,
  } ;

  constructor(
    nombreTratamiento: string,
    fechaInicio: Date,
    fechaFinal: Date,
    intervaloDosis: string,
    medicamento: {
      nombre:string,
      descripcion:string,
      id?:number

    },
    status?: string,
    id?: number
  ) {
    this.nombreTratamiento = nombreTratamiento;
    this.fechaInicio = fechaInicio;
    this.fechaFinal = fechaFinal;
    this.intervaloDosis = intervaloDosis;
    this.medicamento = medicamento;
    this.status = status;
    this.id = id;
  }
}

export default Treatment;
