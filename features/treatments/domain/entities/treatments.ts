class Treatments {
    id:number;
    nombreTratamiento:string;
    fechaInicio:string;
    fechaFinal: string;
    intervaloDosis: string;
    status: string;


    constructor(
        id:number,
        nombreTratamiento:string,
        fechaInicio:string,
        fechaFinal: string,
        intervaloDosis: string,
        status: string,
    ){
        this.id = id;
        this.nombreTratamiento = nombreTratamiento;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.intervaloDosis = intervaloDosis;
        this.status = status;
    }
}

export default Treatments;