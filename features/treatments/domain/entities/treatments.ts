import Medicines from "./medicamentos";

class Treatment {
  id?: number;
  nombreTratamiento: string;
  fechaInicio: Date;
  fechaFinal: Date;
  intervaloDosis: string;
  status?: string;
  medicamento: Medicines;

  constructor(
    nombreTratamiento: string,
    fechaInicio: Date,
    fechaFinal: Date,
    intervaloDosis: string,
    medicamento: Medicines,
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
