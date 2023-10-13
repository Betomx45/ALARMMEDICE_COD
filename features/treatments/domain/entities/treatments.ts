class Treatments {
    id:number;
    fechaInicio:string;
    fechaFinal: string;
    intervaloDosis: string;


    constructor(
        id:number,
        fechaInicio:string,
        fechaFinal: string,
        intervaloDosis: string,
    ){
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.intervaloDosis = intervaloDosis;
    }
}

export default Treatments;