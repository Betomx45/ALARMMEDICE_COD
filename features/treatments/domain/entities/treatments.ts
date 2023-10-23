class Treatments {
    nombreTratamiento:string;
    fechaInicio:Date;
    fechaFinal: Date;
    intervaloDosis: string;
    status: string;
    id?:number;


    constructor(
        nombreTratamiento:string,
        fechaInicio:Date,
        fechaFinal: Date,
        intervaloDosis: string,
        status: string,
        id?:number,
    ){
        this.nombreTratamiento = nombreTratamiento;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.intervaloDosis = intervaloDosis;
        this.status = status;
        this.id= id;
    }
}

export default Treatments;