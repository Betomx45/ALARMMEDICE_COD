class Medicines {
    id?:number;
    nombre:string;
    descripcion:string;


    constructor(
        nombre:string,
        descripcion:string,
        id?:number,
    ){
        this.id = id;
        this.nombre = nombre;
        this.descripcion  = descripcion;
    }
}

export default Medicines;