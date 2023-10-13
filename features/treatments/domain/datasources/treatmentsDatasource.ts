import TreatmentsResult from "../entities/treatmentsResult";
import Treatments from "../entities/treatments";

abstract class TreatmentsDatasource{
    //Habra una función para leer los personajes por numerode pagina, retornarlos en un array
    abstract getTreatments():Promise<TreatmentsResult>;
}

export default TreatmentsDatasource;